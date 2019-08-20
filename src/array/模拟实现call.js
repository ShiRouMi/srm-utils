// 模拟实现 call

let obj = {
  name: 'fff',
  func: function() {
    console.log(this.name)
  }
}
obj.func.call(obj)

Function.prototype._call = function() {
  let args = Array.from(arguments), context = args.shift()
  context = Object(context)
  context.func = this
  const result = context.func(...args)
  delete args.func
  return result
}