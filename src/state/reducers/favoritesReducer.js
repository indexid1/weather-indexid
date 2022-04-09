import { findByName } from '../../utils/utils';
import { TOGGLE_FAVORITES } from '../action-creators/types';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES: {
      let newFavorites = [];
      const foundCity = findByName(state.favorites, action.payload.cityName);
      if (foundCity) {
        newFavorites = state.favorites.filter(
          obj => obj.cityName !== action.payload.cityName
        );
      } else {
        newFavorites = [...state.favorites, action.payload];
      }
      return { ...state, favorites: newFavorites };
    }

    default:
      return state;
  }
};

export default favoritesReducer;
