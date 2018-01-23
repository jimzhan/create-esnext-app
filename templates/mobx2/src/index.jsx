import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { register } from 'register-service-worker'
import { AppContainer } from 'react-hot-loader'

import App from './routes'
import Store from './stores'

const renderApp = () => {
  const store = new Store()
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
  register()
}

renderApp()
