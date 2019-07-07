export default class weatherServices {
  static getWeather(city) {
    return fetch(
      `https://openweathermap.org/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`
    );
  }
}
