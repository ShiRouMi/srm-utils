// 函数防抖
const handle = (fn, delay) => {
  let timeId
  return function() {
      if (timeId) clearTimeout(timeId)
      timeId = setTimeout(() => {
          fn.apply(this, arguments)
      }, delay)
  }
}
