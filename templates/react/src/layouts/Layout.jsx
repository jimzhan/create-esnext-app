import React from 'react'
import styled from 'styled-components'
import { Layout as AntLayout } from 'antd'
import Header from './Header'
import Footer from './Footer'
import { children } from './proptypes'

// FIX https://www.caniuse.com/#search=flex-direction on IE 10/11.
const Wrapper = styled.div`
  display: flex;
  flex-direction: 'row';
`

const Container = styled(AntLayout)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled(AntLayout.Content)`
  flex: 1;
`

const Layout = props => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Content>{props.children}</Content>
        <Footer />
      </Container>
    </Wrapper>
  )
}

Layout.propTypes = { children }

export default Layout
