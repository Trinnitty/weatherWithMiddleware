import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReduser";
import { weatherServiseReducer } from "./weatherServiseReducer";
import { loadedCityWeatherOpenweathermapReducer } from "./loadedCityWeatherOpenweathermapReducer";
import { loadedCityWeatherMetaweatherReducer } from "./loadedCityWeatherMeataweatherReducer";

export const rootReducer = combineReducers({
  weatherServise: weatherServiseReducer,
  weather: weatherReducer,
  loadedCityWeatherOpenweathermap: loadedCityWeatherOpenweathermapReducer,
  loadedCityWeatherMetaweather: loadedCityWeatherMetaweatherReducer
});
