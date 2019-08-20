// 扁平化嵌套数组/flat实现
let array = [1, [1, 2, 3], [1, [2, {}]] ]
handle(array) // [1, 1, 2, 3, 1, 2, {}]

// 1
function handle(arr) {
  return arr.flat(Infinity)
}

// 2
const handle = array => JSON.parse(`[${JSON.stringify(array).replace(/\[|]/g,'')}]`)

// 3
const handle = array => {
  return array.reduce((accum, curr) => {
    return accum.concat(Array.isArray(curr) ? handle(curr) : curr)
  }, [])
}

// 4
const handle = array => {
  while(array.some(item => Array.isArray(item))) {
      array = [].concat(...array)
  }
  return array
}