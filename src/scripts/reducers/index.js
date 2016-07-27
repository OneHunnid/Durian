import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const retrieveMessage = (state={}, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGE':
      return {
        ...state,
        message: "A React, Redux and Webpack Starter Kit"
      }
    default:
      return state
  }
}

const combinedReducers = combineReducers({
    retrieveMessage,
    routing: routerReducer
  })

export default combinedReducers;
