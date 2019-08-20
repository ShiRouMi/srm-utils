// 模拟实现 new

function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.getInfo = function() {
  console.log(this.name + this.age)
}
let person = new Person('sss', 24)
person.getInfo()

const _new = function() {
  let fn = Array.prototype.shift.call(arguments)
  let obj = Object.create(fn.prototype)
  let o = fn.apply(obj, arguments)
  return typeof o === 'object' ? o : obj
}