export function loadedCityWeatherMetaweatherAction(city, weather) {
  return {
    type: "SET_CITYMETAWEATHER",
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
