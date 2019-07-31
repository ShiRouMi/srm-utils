const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

const isArray = isType('Array')([])
