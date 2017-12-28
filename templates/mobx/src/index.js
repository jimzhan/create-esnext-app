import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { registerServiceWorker } from 'tasks'
import { Home } from 'containers'
import Store from 'stores'

const renderApp = () => {
  const store = new Store()
  const browserHistory = createBrowserHistory()
  const routeStore = new RouterStore()
  const history = syncHistoryWithStore(browserHistory, routeStore)

  ReactDOM.render(
    <AppContainer>
      <Router history={history}>
        <Provider store={store} routing={routeStore}>
          <Home />
        </Provider>
      </Router>
    </AppContainer>,
    document.getElementById('root')
  )
  registerServiceWorker()
}

renderApp()
