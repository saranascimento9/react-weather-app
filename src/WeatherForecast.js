import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="foracast-icon">
            <WeatherIcon code="01d" size={35} />
          </div>
          <div className="forecast-temperatures">
            {" "}
            <span className="forecast-max">19º</span>{" "}
            <span className="forecast-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
