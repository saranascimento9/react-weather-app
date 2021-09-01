import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>

          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>wednesday 07:00</li>
        <li>mostly cloudly</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />

          <span className="temperature">6</span>
          <span className="unit">ºC</span>
        </div>

        <div className="col-6">
          <ul>
            <li>precipitation: 15%</li>
            <li>humidity: 72%</li>
            <li>wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
