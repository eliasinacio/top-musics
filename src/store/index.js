/* criei o store mas não cheguei a usar, 
eu ia pôr as requisições que estão acontecendo na tablea pra preecher o store logo no inicio da aplicação. 
*/

import { createStore } from "redux";

const INITIAL_STATE = {
  data: {},
  favoriteTracks: []
}


function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCHING': {
      console.log('adding all tracks');

      break;
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