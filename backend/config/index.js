const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  weatherUrl: process.env.WEATHER_API_URL,
  weatherKey: process.env.WEATHER_API_KEY,
  port: process.env.PORT,
  frontendUrl: process.env.FRONTEND_URL
};