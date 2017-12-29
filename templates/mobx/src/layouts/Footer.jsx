import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import { children } from './proptypes'

const StyledFooter = styled(Layout.Footer)`
  text-align: center;
`

const Footer = props => {
  return (
    <StyledFooter>{props.children || 'create-esnext-app ©2017 Created by Jim'}</StyledFooter>
  )
}

Footer.propTypes = { children }

export default Footer
