import React from "react";

export default function DescriptionWeather(props) {
  const { city, weather } = props;

  return (
    <div className="descrWeather">
      <div>{props.weather.temprature}C</div>
      <div className="descrCity">
        <div>{weather.description}</div>
        <div>{city ? city.toUpperCase() : ""}</div>
      </div>
    </div>
  );
}
