export function setWeatherServise(weatherServise) {
  return {
    type: "SET_WEATHERSERVISE",
    payload: {
      weatherServise: weatherServise
    }
  };
}
