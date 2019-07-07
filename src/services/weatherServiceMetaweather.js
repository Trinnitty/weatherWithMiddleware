export default class weatherServiceMetaweather {
  static url = "https://www.metaweather.com/api/location/search/?query=";

  static key = "d0dd2b694bbc4095a1436ce0c7f27c1b";
  static getWeather(city) {
    return fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=${this.key}`
    );
  }
}
