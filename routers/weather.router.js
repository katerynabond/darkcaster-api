/*jshint esversion: 6*/
const express = require ('express');
const router = express.Router();
const darksky = process.env.DARKSKY || require('../credentials').darksky;
const baseUrl = `https://api.darksky.net/forecast/${darksky}/`;
const baseUrlMaps = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
const axios = require('axios');

router.get('/weather', (request, response, next) => {
  const url = `${baseUrl}....29,-82`;
  axios.get(url)
       .then(weather => {
        response.json(weather.data);
       })
       .catch(err => {
         next(err);
       });
});

router.get('/weather/:lat,:lon', (request, response, next) => {
  const lat = request.params.lat;
  const lon = request.params.lon;
  const url = `${baseUrl}${lat},${lon}`;


  axios.get(url)
       .then(weather => {
        response.json(weather.data);
       })
       .catch(err => {
         next(err);
       });

});



router.get('/weather/location/:location', (request, response, next) => {
  const location = request.params.location;
  const urlMaps = `${baseUrlMaps}${location}`;

  axios.get(urlMaps)
       .then(loc => {
         const lat = loc.data.results[0].geometry.location.lat;
         const lon = loc.data.results[0].geometry.location.lng;
         const url = `${baseUrl}${lat},${lon}`;

         axios.get(url)
              .then(weather => {
               response.json(weather.data);
             });

     })
     .catch(err => {
       next(err);
     });
});

module.exports = router;
