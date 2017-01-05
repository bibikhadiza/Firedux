// Actions
const LOADING_DATA = 'LOADING_DATA';
const LOADED_DATA = 'LOADED_DATA';

// Reducer
export default (currentState = false, action) => {

  switch(action.type) {

    case LOADING_DATA:
      return true;

    case LOADED_DATA:
    default:
      return false;
  }
}

// Action creators
export const loadingData = () => {
  return { type: LOADING_DATA };
}

export const loadedData = () => {
  return { type: LOADED_DATA };
}
