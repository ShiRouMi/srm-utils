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

// 元祖
// 数组合并了相同类型的对象， 元祖合并了不同类型的对象
let yuanzu: [string, number] = ['fe', 24]
let yuanzu1: [string, number]
yuanzu1[0] = 'fe'
 //yuanzu = 'fe' ❌
yuanzu1 = ['fe', 24]
// yuanzu1.push(true) ❌