// 对象的类型 --- 接口

interface Person {
  name: string;
  age: number;
}

let fe: Person = {
  name: 'shiroumi',
  age: 24
}
// 定义的变量 不能少属性 不能多属性


// 可选的属性，可选属性意味着可以不存在，但是仍然不能添加未定义的属性
interface Book {
  name: string;
  price?: number;
}
let jsBook: Book = {
  name: '深入浅出js'
}

// 任意属性 索引签名 【!!!】
interface People {
  name: string;
  age?: number;
  [propName: string]: any;
}
let shiroumi: People = {
  name: 'shiroumi',
  age: 24,
  job: 'engineer'
}
// 一旦定义了任意属性的类型，那么确定属性和可选属性必须是它的类型的子集

// 只读属性
interface RPeople {
  readonly id: number;
  name: string;
  age: number;
  [propName: string]: any
}

let sss: RPeople = {
  id: 123,
  name: 'shiroumi',
  age: 24
}
// sss.id = 222 因为是只读的 ，所以这样是不可行的