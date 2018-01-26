import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import App from './routes'
import Store from './stores'

const renderApp = () => {
  const store = new Store()
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
}

renderApp()
