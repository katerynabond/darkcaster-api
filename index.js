const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//routers
const weatherRouter = require('./routers/weather.router');
server.use(weatherRouter);

//route for testing
server.get('/', (request, response) => {
  response.send('It works!');
});

server.listen(port, () => {
  console.log('Now listening on port:', port);
});
