import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Website', dataIndex: 'website', key: 'website' },
]

@inject('store')
@observer
class Users extends Component {
  static propTypes = {
    store: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.store.userStore.loadUsers()
  }

  render() {
    const { users } = this.props.store.userStore
    return (
      <div>
        <h2>Users</h2>
        {users && <Table dataSource={toJS(users)} columns={columns} rowKey={record => record.id} />}
      </div>
    )
  }
}

export default Users
