import weatherServices from "../services/weatherServices";
import weatherServiceMetaweather from "../services/weatherServiceMetaweather";
export const WEATHER_REQUEST = "WEATHER_REQUEST";
export const WEATHER_SUCCESS = "WEATHER_SUCCESS";
export const WEATHER_FAIL = "WEATHER_FAIL";

export function getWeather(city, weatherServise) {
  return function(dispatch) {
    dispatch({
      type: WEATHER_REQUEST
    });
    if (weatherServise === "Openweathermap") {
      weatherServices
        .getWeather(city)
        .then(response => response.json())
        .then(jsonData => {
          let responce = {
            city: city,
            lastUpdate: new Date().getHours(),
            temprature: jsonData.main.temp,
            humidity: jsonData.main.humidity,
            visibility: jsonData.visibility,
            pressure: jsonData.main.pressure,
            description: jsonData.weather[0].main,
            wind: jsonData.wind.speed
          };
          return responce;
        })
        .then(data => {
          console.log(data, "datajson");
          dispatch({
            type: WEATHER_SUCCESS,
            payload: data
          });
          dispatch({
            type: "SET_CITYOPENWEATHERMAPWEATHER",
            payload: data
          });
        })
        .catch(error => {
          dispatch({
            type: WEATHER_FAIL,
            error: true,
            payload: error
          });
        });
    }
    if (weatherServise === "MetaWeather") {
      weatherServiceMetaweather
        .getWeather(city)
        .then(response => response.json())
        .then(jsonData => {
          console.log(jsonData, "jsonData");
          let data = jsonData.data[0];
          let responce = {
            city: city,
            lastUpdate: new Date().getHours(),
            temprature: data.temp,
            humidity: data.rh,
            visibility: data.vis * 1000,
            pressure: data.pres.toFixed(1),
            description: data.weather.description,
            wind: data.wind_spd.toFixed(0)
          };
          return responce;
        })
        .then(data => {
          console.log(data, "datajson");
          dispatch({
            type: WEATHER_SUCCESS,
            payload: data
          });
          dispatch({
            type: "SET_CITYMETAWEATHER",
            payload: data
          });
        })
        .catch(error => {
          dispatch({
            type: WEATHER_FAIL,
            error: true,
            payload: error
          });
        });
    }
  };
}
