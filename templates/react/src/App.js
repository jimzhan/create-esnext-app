import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Layout } from 'layouts'
import './assets/styles/App.css'

class App extends Component {
  render () {
    return (
      <Layout>
        <Row>
          <Col>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default App
