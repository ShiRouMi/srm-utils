import Store from "./store"
import event from "./event"

/**
 * @param {boolean} isLocal
 * 默认是localStorage 存储
 * 导出常用的存储方法
 * 其他的配置（比如设置成 sessionStorage) 存储使用 .store().xxx()  
 */
const store = isLocal => new Store(isLocal)
const localStore = new Store()
const setStore = localStore.setStore
const getStore = localStore.getStore
const removeStore = localStore.removeStore
const clearStore = localStore.clearStore

export { store }

/**
 * event api
 */
const on = event.on
const off = event.off
const emit = event.emit
const once = event.once

const F = {
  // store api
  store, setStore, getStore, removeStore, clearStore,
  // event api
  event, on, off, emit, once,
  // customer api
  ...require('./utils')
}

export default F
