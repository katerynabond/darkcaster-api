
const express = require ('express');
const router = express.Router();

router.get('/weather', (request, response) => {
  response.send('Here be the weather');
});
router.get('/weather/:lat,:lon', (request, response) => {
  response.send('Here be the weatherfor that place');
});
module.exports = router;
