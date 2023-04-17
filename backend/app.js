const express = require('express');
const cors = require('cors');

const { frontendUrl } = require('./config');
const weatherRouter = require('./routes/weatherRoutes');

const app = express();


const corsOptions = {
    origin: frontendUrl
};
  
app.use(cors(corsOptions));

app.use('/weather', weatherRouter)

module.exports = app;