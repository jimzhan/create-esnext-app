import React from 'react'
import { FlexLayout } from 'layouts'
import { Login as UserLogin } from 'components/users'

const Login = props => {
  return (
    <FlexLayout>
      <UserLogin />
    </FlexLayout>
  )
}

export default Login
