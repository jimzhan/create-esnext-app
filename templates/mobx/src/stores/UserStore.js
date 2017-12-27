import { UserServices } from 'services'
import { action, observable } from 'mobx'

class UserStore {
  @observable users

  @action async loadUsers () {
    this.users = await UserServices.find()
  }
}

export default new UserStore()
