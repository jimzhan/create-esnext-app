import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { registerServiceWorker } from 'tasks'
import App from './App'
import UserStore from 'stores/UserStore'
import './assets/styles/index.css'

ReactDOM.render(
  <Provider store={UserStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
