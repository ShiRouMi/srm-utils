// 模拟实现 bind

let obj = {
  name: 'sss',
  func: function() {
    console.log(this.name)
  }
}

obj.func.bind(obj)()

Function.prototype._bind = function() {
	if(typeof this !== 'function') {
		throw new Error('调用方必须是对象')
	}
	let args = [...arguments],
		context = args.shift()
	let _this = this
	return function() {
		return _this.apply(context, args.concat(...arguments))
	}
}