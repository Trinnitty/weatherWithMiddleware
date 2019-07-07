import React from "react";

export default function WeatherServise(props) {
  const { weatherServise } = props;

  return (
    <div className="weatherServise">
      <div>{weatherServise} servise </div>
    </div>
  );
}
