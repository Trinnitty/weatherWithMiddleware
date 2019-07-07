import React, { Fragment, useRef } from "react";

export default function Input(props) {
  const inputEl = useRef(null);
  const { searchWeatherForCity } = props;

  const onButtonClick = () => {
    const city = inputEl.current.value.toUpperCase();
    inputEl.current.value = "";
    searchWeatherForCity(city);
  };

  return (
    <Fragment>
      <input ref={inputEl} type="text" placeholder={"Enter city"} />
      <button onClick={onButtonClick}>
        find
      </button>
    </Fragment>
  );
}
