// 函数声明
function fun1(x: number, y: number): number {
  return x + y;
}

fun1(1, 3);
// fun1(1,2,3) 错误
// fun1(1) 错误

// 函数表达式

let funSum: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 用接口定义函数的形状
interface Func2 {
  (name: string, job: string): boolean;
}

let myFunc: Func2;

myFunc = function(name: string, job: string) {
  return name.indexOf(job) !== -1;
};

// 可选参数
function returnName(firstname: string, lastname?: string) {
  // 可选参数必须接在必需参数后面
  if (lastname) {
    return firstname + " " + lastname;
  } else {
    return firstname;
  }
}
let fe1 = returnName("fe", "feng");
let fe2 = returnName("fe");

// 参数默认值(TypeScript 会将添加了默认值的参数识别为可选参数)
function returnDefault(name: string = "fe", job: string) {
  // 此时就不受「可选参数必须接在必需参数后面」的限制了
  return name + " " + job;
}
let fe3 = returnDefault("shiroumi", "teacher");
let fe4 = returnDefault(undefined, "shiye");

// 剩余参数 (rest 参数只能是最后一个参数)
function fun4(arr: any[], ...items: any[]) {
  items.forEach(item => {
    arr.push(item);
  });
}
let arr1 = [];
fun4(arr1, 2, 4, 6);


// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: string | number): string | number {
  if(typeof x === 'string') {
    return x.split('').reverse().join('')
  } else if(typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  }
}