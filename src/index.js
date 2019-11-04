import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/index'

import App from './components/app'


ReactDOM.render(
  //Reducers gönderilen aksiyonlara göre işlemler yapar...
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  // <App />,
  document.getElementById('root')
);