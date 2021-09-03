import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertToMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "metric") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ºC |{" "}
          <a href="/" onClick={convertToImperial}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{fahrenheit()}</span>
        <span className="unit">
          <a href="/" onClick={convertToMetric}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
