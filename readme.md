# Weather Forecast App

## _What's the weather like today?_

This is a weather forecast app that displays the current temperature and a chart of hourly temperatures for the next 24 hours. The backend is built with Node.js and the frontend is built with React..

## Installation

Clone the repository to your local machine using the following command:

```sh
gh repo clone mcontoor/weather-forecast-app
```

Navigate to the project directory:

```sh
cd weather-forecast-app
```

Install the dependencies for both the backend and frontend:

```sh
npm run install-all
```

Create a ```.env``` file in both folders and add the secrets.

Running the App
To run the app, you need to start both the backend and frontend servers.

Start the backend server:

```sh
npm start
```

The backend server should now be running on http://localhost:4000.

Start the frontend server:

```sh
npm run start
```

The frontend server should now be running on http://localhost:3000.
Open http://localhost:3000 in your browser to see the weather forecast app.

APIs Used
This app uses the WeatherAPI to get the weather data.
