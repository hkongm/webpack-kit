import React from 'react'
import ReactDOM from 'react-dom'
import App from './reduxtodo/app.js'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reduxtodo/reducers'

// 从导入的 reducers 创建 store
let store = createStore(todoApp)

let rootElement = document.getElementById('wrapper')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
