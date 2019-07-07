export default class LocationService {
  static apiKey = "xYjOyFkZsPAdPSDbJrQsdGr0gT4fIe1uZBpBow0A";
  static url = "https://ip-location.icu/api/v1";
  static adressToGetIp = `${this.url}/user-info/?apiKey=${this.apiKey}`;

  static getIp() {
    return fetch(this.adressToGetIp);
  }

  static getCity(ip) {
    return fetch(`${this.url}/city/?apiKey=${this.apiKey}&ip=${ip}`);
  }
}
