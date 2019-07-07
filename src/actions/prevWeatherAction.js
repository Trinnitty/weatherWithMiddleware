export default function setPrevWeather(weather) {
  console.log(weather, "weather action");
  return {
    type: "WEATHER_PREV",
    payload: weather
  };
}
