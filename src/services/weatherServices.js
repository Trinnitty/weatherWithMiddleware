export default class weatherServices {
  static apiKey = '4e3ce6739c49424f2cf2db28dfb21061';

  static getWeather(city) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://openweathermap.org/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`
    );
  }
}
