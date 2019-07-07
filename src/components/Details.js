import React from "react";

export default function Details(props) {
  const { humidity, visibility, wind, pressure } = props.weather;
  return (
    <div className="details">
      <div>Details</div>
      {humidity ? (
        <div className="flexColumn">
          <div>Humidity</div> <div>{humidity} %</div>
        </div>
      ) : (
        ""
      )}
      {visibility ? (
        <div className="flexColumn">
          <div>Visibility</div> <div>{(visibility / 1000).toFixed(1)} km</div>
        </div>
      ) : (
        ""
      )}
      {wind ? (
        <div className="flexColumn">
          <div>Wind</div> <div>{wind} km/h</div>
        </div>
      ) : (
        ""
      )}
      {pressure ? (
        <div className="flexColumn">
          <div>Pressure</div> <div>{pressure} gPa</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
