import {
  SET_CITY_DATA,
  SET_AUTOCOMPLETE,
  SET_FORECAST,
} from '../action-creators/types';

export const locationInitialState = {
  cityAutoComplete: [],
  currentCity: null,
  forecast: [],
};

const locationReducer = (state = locationInitialState, action) => {
  switch (action.type) {
    case SET_CITY_DATA:
      return {
        ...state,
        currentCity: {
          ...action.payload.cityData,
          cityName: action.payload.cityName,
          cityKey: action.payload.cityKey,
        },
      };
    case SET_AUTOCOMPLETE:
      return { ...state, cityAutoComplete: action.payload };
    case SET_FORECAST:
      return {
        ...state,
        forecast: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
