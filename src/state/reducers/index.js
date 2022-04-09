import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import locationReducer from './loactionReducer';
import favoritesReducer from './favoritesReducer';

const reducers = combineReducers({
  location: locationReducer,
  favorites: favoritesReducer,
  global: globalReducer,
});

export default reducers;
