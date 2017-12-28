import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'

import { registerServiceWorker } from 'tasks'
import { Home } from 'containers'
import Store from 'stores'

ReactDOM.render(
  <AppContainer>
    <Provider store={new Store()}>
      <Home />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
registerServiceWorker()
