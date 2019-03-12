// 原始数据类型 null undefined boolean string number symbol
// 特别注意 void


let isDone: boolean = true;

// ❌let createByBoolean: boolean = new Boolean(1)
let createByBoolean: boolean = Boolean(1);

let str: string = "hello world";

let templateStr: string = `hello 
nice to meet ${str}`;

let num: number = 123;

let un: undefined = undefined;

let n: null = null;

// 注意： undefined 和 null 是所有类型的子类型，什么意思呢? 
// 以下赋值都是允许的
isDone = undefined;
str = null;
templateStr = undefined;
num = null;


// 用 空值 void 表示没有返回值的函数
function noReturnFun(): void {
  console.log("hello");
}
