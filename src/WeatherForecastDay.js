import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
      </div>
      <div className="forecast-temperatures">
        {" "}
        <span className="forecast-max">{maxTemperature()}º</span>{" "}
        <span className="forecast-min">{minTemperature()}º</span>
      </div>
    </div>
  );
}
