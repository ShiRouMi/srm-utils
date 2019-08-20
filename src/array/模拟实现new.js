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

/*
创建一个空对象，作为将要返回的对象实例
将这个空对象的原型，指向构造函数的prototype属性
将这个空对象赋值给函数内部的this关键字
开始执行构造函数内部的代码。
*/
function _new() {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数，目的还有就是获取剩余参数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
var actor = _new(Person, '张三', 28);