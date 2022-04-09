import axios from 'axios';
import {
  REACT_APP_AUTOCOMPLETE_URL,
  REACT_APP_CITIES_URL,
  REACT_APP_CURRENT_WEATHER_URL,
  REACT_APP_FORECAST,
} from './api';

export const citySearch = axios.create({
  baseURL: `${REACT_APP_CITIES_URL}`,
});

export const cityCurrentWeather = axios.create({
  baseURL: `${REACT_APP_CURRENT_WEATHER_URL}`,
});

export const autoCompleteCityName = axios.create({
  baseURL: `${REACT_APP_AUTOCOMPLETE_URL}`,
});

export const forecastWeather = axios.create({
  baseURL: `${REACT_APP_FORECAST}`,
});
