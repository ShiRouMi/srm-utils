// 数组去重
let array = [1, 2, 1, '3', '3', 0 , 1]
handle(array)   // [1, 2, '3', 0]

// 1
function handle(arr) {
  return arr.filter((item, idx) => arr.indexOf(item) === idx)
}

// 2
function handle(arr) {
  return [...new Set(arr)]
}

// 3
function handle(arr) {
  return arr.reduce((accu, curr) => {
    !accu.includes(curr) && accu.push(curr)
		return accu
  }, [])
}

// 4
const handle = array => {
  let map = new Map()
  return array.filter(item => map.has(item) ? false : map.set(item))
}
