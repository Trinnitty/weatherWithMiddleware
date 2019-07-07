const initialState = {
  weatherServise: "Openweathermap"
};

export function weatherServiseReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_WEATHERSERVISE":
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
