const initialState = {};

export function loadedCityWeatherMetaweatherReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "SET_CITYMETAWEATHER":
      return { ...state, [action.payload.city]: { ...action.payload } };
    default:
      return state;
  }
}
