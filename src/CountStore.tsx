/** @format */

import { action, makeObservable, observable } from 'mobx'

class CountStore {
  count = 0

  constructor() {
    makeObservable(this, {
      count: observable,
      incs: action,
      decs: action,
    })
  }

  incs() {
    this.count++
  }

  decs() {
    this.count--
  }
}

export default CountStore
