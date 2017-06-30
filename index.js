
const express = require('express');
const server = express();
const port = process.env.PORT || 8080;


//here middleware imports
const logger = require('./middleware/logger');
const notFound = require('./middleware/404');

//routers(middleware)
const weatherRouter = require('./routers/weather.router');

//middleware use
server.use(logger);
server.use(weatherRouter);
//route for testing
server.get('/', (request, response) => {
  response.send('It works!');
});
server.use(notFound);

server.listen(port, () => {
  console.log('Now listening on port:', port);
});
