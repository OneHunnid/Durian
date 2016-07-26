import { createStore, applyMiddleware } from 'redux'
import combinedReducers from './../reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(logger(), thunk);

const store = createStore(
  combinedReducers,
  middleware
);

export default store;
