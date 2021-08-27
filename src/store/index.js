import { createStore } from "redux";

const INITIAL_STATE = {
  tracks: [],
  favoriteTracks: []
}

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_DATA': {
      console.log('adding all tracks', action.data);
      return {...state, tracks: action.data}
    }
    case 'ADD_FAVORITE': {
      console.log('adding track to favorites');
      break;
    }
    case 'REMOVE_FAVORITE': {
      console.log('removing track of favorites');
      break;
    }
  
    default:
      break;
  }
  return state;
}

const store = createStore(reducer);

export default store;