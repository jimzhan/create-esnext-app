import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Layout } from 'layouts'
import { LoginForm } from 'components'
import './assets/styles/App.css'

class App extends Component {
  render () {
    return (
      <Layout>
        <Row type='flex' justify='space-around' align='middle'>
          <Col span={2} />
          <Col span={8}><LoginForm /></Col>
          <Col span={2} />
        </Row>
      </Layout>
    )
  }
}

export default App
