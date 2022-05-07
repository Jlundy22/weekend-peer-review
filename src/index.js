// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, 
  applyMiddleware } from 'redux';
import registerServiceWorker 
from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// reducer for text feedback data
const textFeedback = (state = [], action) => {
  if (action.type === 'SET_Text') {
    return action.payload;
  }
  return state;
};

// reducer for number feedback data
const numberFeedback = (state = [], action) => {
  if (action.type === 'SET_NUMBER') {
    return action.payload;
  }
  return state;
};

// redux store
const reduxStore = createStore(
  combineReducers({
    numberFeedback,
    textFeedback,
  }),
  applyMiddleware(logger)
);


// Wrap the App in a Provider
ReactDOM.render(
<Provider store={reduxStore}>
<App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
