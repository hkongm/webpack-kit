import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './reduxcounter/app'
import reducers from './reduxcounter/reducers'

// 从导入的 reducers 创建 store
// const reducer = combineReducers(reducers)
const store = createStore(reducers)

const rootElement = document.getElementById('wrapper')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
