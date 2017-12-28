import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { registerServiceWorker } from 'tasks'
import { Home } from 'containers'
import Store from 'stores'
import './assets/styles/index.css'

ReactDOM.render(
  <Provider store={new Store()}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
