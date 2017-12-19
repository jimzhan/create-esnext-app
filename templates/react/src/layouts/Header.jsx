import React from 'react'
import { Layout } from 'antd'
import { children } from './proptypes'

const Header = props => {
  return (
    <Layout.Header>{props.children}</Layout.Header>
  )
}

Header.propTypes = { children }

export default Header
