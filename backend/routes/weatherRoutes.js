const express = require('express');
const axios = require('axios');
const router = express.Router();

const { weatherKey, weatherUrl } = require('../config');

/**
 * GET request to /weather
 */
router.get('/', async(req, res, next) => {
    try {
        const url = `${weatherUrl}?key=${weatherKey}&q=20171&days=1`
      const response = await axios.get(url);
      const { current, forecast } = response.data;
      const currentTime = new Date();
      const formattedData = {
        current: {
          temp_f: current.temp_f
        },
        forecast: forecast.forecastday[0].hour
        // .filter(hour => currentTime.getHours() >= new Date(hour.time).getHours())
        .map(hour => ({
          time: hour.time,
          temp_f: hour.temp_f
        }))
      };
      res.json(formattedData);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while fetching weather data');
    }
});

module.exports = router