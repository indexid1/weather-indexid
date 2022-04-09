import {
  SET_IS_ERROR,
  TOGGLE_MODE,
  TOGGLE_TEMPERATURE_TYPE,
  TOGGLE_ERROR,
} from '../action-creators/types';

const initialState = {
  isError: false,
  isDark: false,
  isCelcius: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_ERROR:
      return { ...state, isError: action.payload };
    case TOGGLE_MODE:
      return { ...state, isDark: !state.isDark };
    case TOGGLE_TEMPERATURE_TYPE:
      return { ...state, isCelcius: !state.isCelcius };
    case TOGGLE_ERROR:
      return { ...state, isError: action.payload };

    default:
      return state;
  }
};

export default globalReducer;
