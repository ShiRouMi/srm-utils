class Store {
  constructor(isLocal = true) {
    this.local = isLocal ? window.localStorage : window.sessionStorage
  }

  setStore(key, value) {
    if (!key || !value) return false
    value = JSON.stringify(value)
    this.local.setItem(key, value)
  }

  getStore(key) {
    if (!key) return false
    return JSON.parse(this.local.getItem(key))
  }

  removeStore(key) {
    if (!key) return false
    this.local.removeItem(key)
  }
  
  clearStore() {
    this.local.clear()
  }
}

export default Store
