// 任意值（any) 允许赋值为任意类型

// 其他情况
let num1: number = 123
// num1 = true 这样赋值是错误的
num1 = undefined // 注意: undefined null 是所有类型的子类型 所以允许被赋值


// any
let anyNumber: any = 'hello world'
anyNumber = true // 这样赋值是对的

// 任意值的属性和方法
let anyThing: any = 'fe'
console.log(anyThing.name)
console.log(anyThing.func('aa')) // 这些写法都是允许的



// 类型推断

// 联合类型
let strNumber: string | number
strNumber = '123'
strNumber = 123
// strNumber = true 这行就不行
// 访问联合类型的属性和方法，只能访问共有的
function func(param: string | number) {
  // return param.length length属性不是共有的
  return param.toString()
}

