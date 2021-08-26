import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import MyReducers from './Reducers/index';
import {Provider} from 'react-redux';

const store = createStore(
  MyReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>, 
  document.getElementById('root')
);
reportWebVitals();
