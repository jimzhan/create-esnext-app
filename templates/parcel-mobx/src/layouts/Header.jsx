import React from 'react'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);  
  margin: 16px 24px 16px 0;
  float: left;
`
const { Item } = Menu

const Header = () => (
  <Layout.Header>
    <Logo />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Item key="home">
        <Link to="/">Home</Link>
      </Item>
      <Item key="login">
        <Link to="/login">Login</Link>
      </Item>
    </Menu>
  </Layout.Header>
)

export default Header
