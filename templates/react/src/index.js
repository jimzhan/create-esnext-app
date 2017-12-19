import React from 'react'
import ReactDOM from 'react-dom'
import { registerServiceWorker } from 'tasks'
import App from './App'
import './assets/styles/index.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
