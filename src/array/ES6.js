/*
Array.from()
Array.of()
find
findIndex
fill
entries()，keys() 和 values()
includes()
flat()，flatMap()
*/
// Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）
// 和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// Array.of方法用于将一组值，转换为数组。
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

// find
[1, 4, -5, 10].find((n) => n < 0)
// -5

// findIndex
[1, 5, 10, 15].findIndex(function(value, index, arr) {
  return value > 9;
}) // 2

// fill
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"

[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true

[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]