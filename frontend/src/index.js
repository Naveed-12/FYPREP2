import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserReducer from './redux-store/Reducers/UserReducer';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers} from 'redux';

const store=createStore(combineReducers({
  UserList:UserReducer
}));
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();