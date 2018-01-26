import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from 'antd'

const StyledFooter = styled(Layout.Footer)`
  text-align: center;
`

/* eslint-disable */
const Footer = props => (
  <StyledFooter>{props.children || 'create-esnext-app ©2017 Created by Jim'}</StyledFooter>
)
/* eslint-enable */

Footer.propTypes =  {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
}

export default Footer
