import React from 'react';
import WeatherChart from '../components/WeatherChart';

import './Weather.css';

const Weather = () => {
  return (
    <div className='container'>
        <h1 className='title'>Weather Forecast for the day</h1>
        <WeatherChart />
    </div>
  );
};

export default Weather;