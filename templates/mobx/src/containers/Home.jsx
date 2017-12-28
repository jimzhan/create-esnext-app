import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Layout } from 'layouts'
import { Login, Users } from 'components/users'

export default class Home extends Component {
  render () {
    return (
      <Layout>
        <Row type='flex' justify='space-around' align='middle'>
          <Col span={2} />
          <Col span={8}><Login /></Col>
          <Col span={2} />
        </Row>
        <Row>
          <Col><Users /></Col>
        </Row>
      </Layout>
    )
  }
}
