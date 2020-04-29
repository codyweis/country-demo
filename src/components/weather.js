import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Box } from "@material-ui/core";

const Weather = ({ capital }) => {
  const [weatherDetails, setWeatherDetails] = useState([]);
  console.log(weatherDetails);
  const [isLoading, setIsLoading] = useState(false);
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://api.weatherstack.com/current", {
        params: {
          access_key: process.env.REACT_APP_WEATHER_API_KEY,
          query: capital
        }
      })
      .then(response => {
        setWeatherDetails(response.data.current);
        setIsLoading(false);
      });
  }, [capital]);
  return (
    <div>
      {weatherDetails && isLoading ? (
        <h4>Loading Weather...</h4>
      ) : weatherDetails ? (
        <Fragment>
          <h4 style={{ marginBottom: 2 }}>Weather</h4>
          <Box
            border={1}
            borderColor={"lightGray"}
            padding={2}
            width={"fit-content"}
            display={"grid"}
          >
            <img
              alt="weather"
              style={{ marginBottom: 10 }}
              src={weatherDetails.weather_icons}
            />
            {weatherDetails.weather_descriptions} :{" "}
            {celsiusToFahrenheit(weatherDetails.temperature)} degrees
          </Box>
        </Fragment>
      ) : (
        <label>Weather Cannot Be Loaded</label>
      )}
    </div>
  );
};

export default Weather;
