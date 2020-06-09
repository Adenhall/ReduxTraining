import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const initialState = {
  count: 0,
  color: "",
  boxColor: []
}

const reducer = (state=initialState, action) => {
  if (action.type === "INCREMENT") {
    state.count++
  }
  if (action.type === "DECREMENT") {
    state.count--
  }

if (action.type === "RESET") {
  state.count=0
}
if (action.type === "CHANGE_BOX_COLOR") {
  state.color = action.payload
}
if (action.type === "CHANGE_SPECIFIC_BOX_COLOR") {
  state.boxColor[action.payload.idx] = action.payload.color
}
  return {...state}
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
