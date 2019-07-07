export function loadedCityWeatherOpenweathermapAction(city, weather) {
  return {
    type: "SET_CITYOPENWEATHERMAPWEATHER",
    payload: {
      city: city,
      lastUpdate: weather.lastUpdate,
      temprature: weather.temprature,
      humidity: weather.humidity,
      visibility: weather.visibility,
      pressure: weather.pressure,
      description: weather.description,
      wind: weather.wind
    }
  };
}
