// 类型 + [] 表示法
let numArray: number[] = [1,2,3,4,5]

// let numArray2: number[] = [1,2,3,'4',5] 这样就不行

// numArray.push('a') 这样也不行

// 数组泛型
let arrayEleme: Array<number> = [1,2,3,4,5]

// 用接口表示数组
interface itArray {
  [index: number]: number
}

let itArrayNum: itArray = [1,2,3]

// any

let anyArray: any[] = [1, true, 'str', {a: 1}]

// 类数组

function func() {
  // let args: number[] = arguments // 错误的 类数组不是数组类型
  // console.log(args)

  // ----------
  let args1: IArguments = arguments
}