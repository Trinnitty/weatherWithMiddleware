import React, { useState } from "react";

export default function SearchWeather(props) {
  const [clickOpenweathermap, setClickOpenweathermap] = useState(true);
  const [clickMetaWeather, setClickMetaWeather] = useState(false);

  const handleClickOpenweathermap = () => {
    if (!clickOpenweathermap) {
      props.setWeatherServise("Openweathermap");
      setClickOpenweathermap(!clickOpenweathermap);
      setClickMetaWeather(!clickMetaWeather);
    }
  };
  const handleClickMetaWeather = () => {
    if (!clickMetaWeather) {
      props.setWeatherServise("MetaWeather");
      setClickOpenweathermap(!clickOpenweathermap);
      setClickMetaWeather(!clickMetaWeather);
    }
  };

  return (
    <div className="search">
      <button
        onClick={handleClickOpenweathermap}
        className={clickOpenweathermap ? "active" : ""}
      >
        Search weather by Openweathermap
      </button>
      <button
        onClick={handleClickMetaWeather}
        className={clickMetaWeather ? "active" : ""}
      >
        Search weather by MetaWeather
      </button>
    </div>
  );
}
