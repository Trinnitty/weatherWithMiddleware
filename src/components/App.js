import React, { PureComponent } from "react";
import LocationService from "../services/LocationService";
import setPrevWeather from "../actions/prevWeatherAction";
import SearchWeather from "./SearchWeather";
import DescriptionWeather from "./DescriptionWeather";
import Input from "./Input";
import Details from "./Details";
import Loading from "./Loading";
import WeatherServise from "./WeatherServise";
import { connect } from "react-redux";
import { getWeather } from "../actions/weatherAction";
import { setWeatherServise } from "../actions/weatherServiseAction";
import PropTypes from "prop-types";

class App extends PureComponent {
  state = {
    error: false
  };
  componentDidMount = () => {
    const { city } = this.props.weather.weather;
    // if first enter on the app
    if (!city) {
      console.log('request for city');
      //avoid  block of fetch data
      setTimeout(
        LocationService.getIp()
          .then(response => response.json())
          .then(jsonData => {
            console.log(jsonData.ip,'jsonData.ip');
            return jsonData.ip;
          })
          .then(data => LocationService.getCity(data))
          .then(responce => responce.json())
          .then(jsonData => {
            console.log(jsonData,'jsonData')
            if (jsonData.city_name) {
              let city = jsonData.city_name.toUpperCase();
              console.log(city,'city')
              this.searchWeatherForCity(city);
            }
            if(jsonData.error){
              this.setState({ error: true });
            }
          })
          .catch(error => {
            this.setState({ error: true });
            console.log(error.message, "error LocationService");
          }),
        3500
      );
    }
  };

  searchWeatherForCity = city => {
    const { weatherServise } = this.props.weatherServise;
    const {
      setWeatherAction,
      prevWeatherAction,
      loadedCityWeatherOpenweathermap,
      loadedCityWeatherMetaweather
    } = this.props;
   if(this.state.error){
    this.setState({ error: false });
   }
    if (weatherServise === "Openweathermap") {
      if (loadedCityWeatherOpenweathermap[city]) {
        console.log("current city weather excist");
        if (
          new Date().getHours() -
            loadedCityWeatherOpenweathermap[city].lastUpdate <
          2
        ) {
          let cityWeather = loadedCityWeatherOpenweathermap[city];
          prevWeatherAction(cityWeather);
        } else {
          setWeatherAction(city, weatherServise);
        }
      } else {
        setWeatherAction(city, weatherServise);
      }
    }
    if (weatherServise === "MetaWeather") {
      if (loadedCityWeatherMetaweather[city]) {
        console.log("current city weather excist");
        if (
          new Date().getHours() -
            loadedCityWeatherMetaweather[city].lastUpdate <
          2
        ) {
          let cityWeather = loadedCityWeatherMetaweather[city];
          prevWeatherAction(cityWeather);
        } else {
          setWeatherAction(city, weatherServise);
        }
      } else {
        setWeatherAction(city, weatherServise);
      }
    }
  };

  render() {
    const { setWeatherServiseAction } = this.props;
    const { city } = this.props.weather.weather;
    const { weatherServise } = this.props.weatherServise;
    const { weather } = this.props.weather;
    const { isFetching, error } = this.props.weather;
    return (
      <div
        className={
          new Date().getHours() < 7 || new Date().getHours() > 20
            ? "App night"
            : "App"
        }
      >
        <div className="searchBlock">
          <WeatherServise weatherServise={weatherServise} />
          <Input searchWeatherForCity={this.searchWeatherForCity} />
          <SearchWeather setWeatherServise={setWeatherServiseAction} />
        </div>

        {this.state.error && (
          <div className="errorBlock">
            Reload page or try it in another time (may be you are blocked)
          </div>
        )}
        {error ? (
          <div className="errorBlock">
            Correct entered data or reload page and repeat response
          </div>
        ) : (
          <div>
            {(isFetching && <Loading />) || (
              <div>
                <DescriptionWeather city={city} weather={weather} />
                <Details weather={weather} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  weatherServise: PropTypes.object.isRequired,
  weather: PropTypes.object.isRequired
};

const mapStateToProps = store => {
  console.log(store, "store");
  return {
    weatherServise: store.weatherServise,
    weather: store.weather,
    loadedCityWeatherOpenweathermap: store.loadedCityWeatherOpenweathermap,
    loadedCityWeatherMetaweather: store.loadedCityWeatherMetaweather
  };
};
const mapDispatchToProps = dispatch => {
  return {
    prevWeatherAction: weather => dispatch(setPrevWeather(weather)),
    setWeatherServiseAction: servise => dispatch(setWeatherServise(servise)),
    setWeatherAction: (weather, weatherServise) =>
      dispatch(getWeather(weather, weatherServise))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
