const initialState = {};

export function loadedCityWeatherOpenweathermapReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "SET_CITYOPENWEATHERMAPWEATHER":
      return { ...state, [action.payload.city]: { ...action.payload } };
    default:
      return state;
  }
}
