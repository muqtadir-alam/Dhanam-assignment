import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootRuducer from '../reducers/CombindReducers';

var initialState = {};
var middleware = [thunk, logger];
var store = createStore(
	rootRuducer,
	initialState,
	compose(
		applyMiddleware(...middleware)
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
