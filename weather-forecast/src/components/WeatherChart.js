import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { ColorRing } from 'react-loader-spinner';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  import './WeatherChart.css';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const WeatherChart = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`);
            const { current, forecast } = response.data;
            console.log(current)
            const chartdata = {
                labels: forecast.map(hour => new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
                datasets: [{
                label: 'Temperature (°F)',
                data: forecast.map(hour => hour.temp_f),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };
        setData(chartdata);
        setLoading(false);
        } catch (err) {
            alert(err);
            setLoading(false);
        }
    };


    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="chart-container">
      {loading ? (
      <div className="loader">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    </div>
      ) : (
        Object.keys(data).length > 0 ? <Line datasetIdKey='id' data={data} /> : null
        )}
    </div>

    </div>
  );
};

export default WeatherChart;
