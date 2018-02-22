import { useStrict } from 'mobx'
import UserStore from './UserStore'

useStrict(true)

/**
 * --------------------------------------------------------------------------------
 * An effective pattern is to create a RootStore that instantiates all stores, and share references.
 * The advantage of this pattern is:
 *    - Simple to set up.
 *    - Supports strong typing well.
 *    - Makes complex unit tests easy as you just have to instantiate a root store.
 * --------------------------------------------------------------------------------
 * Ref. https://mobx.js.org/best/store.html#combining-multiple-stores
 * --------------------------------------------------------------------------------
 */
class Store {
  constructor() {
    this.userStore = new UserStore(this)
  }
}

export default Store
