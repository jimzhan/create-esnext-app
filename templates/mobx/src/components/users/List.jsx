import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Users extends Component {
  static propTypes = {
    store: PropTypes.object
  }

  componentDidMount () {
    this.props.store.loadUsers()
  }

  render () {
    const { users } = this.props.store

    return (
      <div>
        <h2>Users</h2>
        <ul>{users && users.map(user => <li>{user.name}</li>)}</ul>
      </div>
    )
  }
}

export default Users