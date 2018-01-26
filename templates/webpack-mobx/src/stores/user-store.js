import { UserServices } from 'services'
import { action, observable } from 'mobx'

export default class UserStore {
  @observable users

  constructor(root) {
    this.root = root
  }

  @action async loadUsers() {
    this.users = await UserServices.find()
  }
}
