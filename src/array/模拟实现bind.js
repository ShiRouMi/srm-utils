// 模拟实现 bind

let obj = {
  name: 'sss',
  func: function() {
    console.log(this.name)
  }
}

obj.func.bind(obj)()

Function.prototype._bind = function() {
	let args = [...arguments],
		context = args.shift()
	let _this = this
	return function() {
		return _this.apply(context, args.concat(...arguments))
	}
}