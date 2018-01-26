import React from 'react'
import { Locations, Location } from 'react-router-component'

import Home from './Home'
import Login from './Login'

const App = props => (
    <Locations>
      <Location path='/' handler={Home} />
      <Location path='/login' handler={Login} />
    </Locations>
)

export default App
