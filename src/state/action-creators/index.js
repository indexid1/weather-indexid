import {
  TOGGLE_ERROR,
  SET_CITY_DATA,
  SET_AUTOCOMPLETE,
  TOGGLE_FAVORITES,
  TOGGLE_TEMPERATURE_TYPE,
  TOGGLE_MODE,
  SET_FORECAST,
} from './types';

import {
  cityCurrentWeather,
  autoCompleteCityName,
  forecastWeather,
} from '../../services/apiService';

import {
  getCityData,
  buildAutoComplete,
  buildForecast,
} from '../../utils/utils';
import { mockCityData, mockAutoComplete, mockForecast } from '../mock';
import {
  REACT_APP_API_KEY,
  REACT_APP_IS_DEVELOPMENT,
} from '../../services/api';

const setIsError = isError => {
  return dispatch => {
    dispatch({
      type: TOGGLE_ERROR,
      payload: isError,
    });
  };
};

export const getCityByKey = (cityKey, cityName) => async dispatch => {
  dispatch(setIsError(false));
  if (REACT_APP_IS_DEVELOPMENT === 'true') {
    dispatch({
      type: SET_CITY_DATA,
      payload: { cityData: getCityData(mockCityData), cityName, cityKey },
    });
    return;
  }

  try {
    const response = await cityCurrentWeather.get(
      `/${cityKey}?apikey=${REACT_APP_API_KEY}`
    );
    dispatch({
      type: SET_CITY_DATA,
      payload: { cityData: getCityData(response), cityName, cityKey },
    });
  } catch (e) {
    dispatch(setIsError(true));
  }
};

export const getAutoComplete = searchTerm => async dispatch => {
  dispatch(setIsError(false));
  if (REACT_APP_IS_DEVELOPMENT === 'true') {
    dispatch({
      type: SET_AUTOCOMPLETE,
      payload: buildAutoComplete(mockAutoComplete),
    });
    return;
  }

  try {
    const response = await autoCompleteCityName.get(
      `autocomplete?apikey=${REACT_APP_API_KEY}&q=${searchTerm}`
    );
    dispatch({ type: SET_AUTOCOMPLETE, payload: buildAutoComplete(response) });
  } catch (e) {
    dispatch(setIsError(true));
  }
};

export const getForecast = cityKey => async dispatch => {
  dispatch(setIsError(false));
  if (REACT_APP_IS_DEVELOPMENT === 'true') {
    dispatch({
      type: SET_FORECAST,
      payload: buildForecast(mockForecast, cityKey),
    });
    return;
  }

  try {
    const response = await forecastWeather.get(
      `${cityKey}?apikey=${REACT_APP_API_KEY}`
    );
    dispatch({ type: SET_FORECAST, payload: buildForecast(response, cityKey) });
  } catch (e) {
    dispatch(setIsError(true));
  }
};

export const toggleFavorites = city => {
  return dispatch => {
    dispatch({
      type: TOGGLE_FAVORITES,
      payload: city,
    });
  };
};

export const toggleMode = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_MODE,
    });
  };
};

export const toggleTempratureType = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TEMPERATURE_TYPE,
    });
  };
};
