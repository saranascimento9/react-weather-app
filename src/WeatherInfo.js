import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-12">
          <h1>{props.data.city}</h1>
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={56} />
            </div>{" "}
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-5">
          <FormattedDate date={props.data.date} />
          <span className="text-capitalize">{props.data.description}</span>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
