import { action, observable } from 'mobx'
import * as UserServices from '../services/UserServices'

export default class UserStore {
  @observable users

  constructor(root) {
    this.root = root
  }

  @action async loadUsers() {
    this.users = await UserServices.find()
  }
}
