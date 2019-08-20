// 发布订阅模式
class Pubsub {
  constructor() {
      this.handles = {}
  }
  subscribe(type, handle) {
      if (!this.handles[type]) {
          this.handles[type] = []
      }
      this.handles[type].push(handle)
  }
  unsubscribe(type, handle) {
      let pos = this.handles[type].indexOf(handle)
      if (!handle) {
          this.handles.length = 0
      } else {
          ~pos && this.handles[type].splice(pos, 1)
      }
  }
  publish() {
      let type = Array.prototype.shift.call(arguments)
      this.handles[type].forEach(handle => {
          handle.apply(this, arguments)
      })
  }
}

const pub = new Pubsub()
pub.subscribe('a', function() {console.log('a', ...arguments)})
pub.publish('a', 1, 2, 3)
// a 1 2 3
