import Store from "./store"

const store = isLocal => new Store(isLocal)
const localStore = new Store()
const setStore = localStore.setStore
const getStore = localStore.getStore
const removeStore = localStore.removeStore
const clearStore = localStore.clearStore

export { store }

const F = {
  store,
  setStore,
  getStore,
  removeStore,
  clearStore
}

export default F
