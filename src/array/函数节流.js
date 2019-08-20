// 函数节流
const handle = (fn, interval) => {
  let timeId = null;
  return function() {
      if (!timeId) {
          timeId = setTimeout(() => {
              fn.apply(this, arguments)
              timeId = null
          }, interval)
      }
  }
}

const handle = (fn, interval) => {
  let lastTime = 0
  return function () {
      let now = Date.now();
      if (now - lastTime > interval) {
          fn.apply(this, arguments)
          lastTime = now
      }
  }
}
