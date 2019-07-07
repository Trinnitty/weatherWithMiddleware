const initialState = {
  isFetching: false,
  error: "",
  weather: {
    city: null,
    lastUpdate: "",
    temprature: "",
    humidity: "",
    visibility: "",
    pressure: "",
    description: "",
    wind: ""
  }
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "WEATHER_REQUEST":
      return {
        ...state,
        isFetching: true,
        error: "",
        weather: {
          city: "",
          lastUpdate: "",
          temprature: "",
          humidity: "",
          visibility: "",
          pressure: "",
          description: "",
          wind: ""
        }
      };
    case "WEATHER_SUCCESS":
      return { ...state, isFetching: false, weather: action.payload };
    case "WEATHER_FAIL":
      return { ...state, isFetching: false, error: action.payload.message };
    case "WEATHER_PREV":
      return { ...state, weather: action.payload };
    default:
      return state;
  }
}
