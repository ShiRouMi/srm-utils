// 模拟实现 call

let obj = {
  name: 'fff',
  func: function() {
    console.log(this.name)
  }
}
obj.func.call(obj)

Function.prototype._call = function() {
  // 首先判断调用方是否是函数
	if(typeof this !== 'function') { // 注意：this 为fun.call(thisArg, arg1, arg2, ...)的func
		throw new Error('调用方必须是函数')
	}
  let args = Array.from(arguments), context = args.shift()
  context = Object(context) // ???
  context.func = this
  const result = context.func(...args)
  delete args.func
  return result
}