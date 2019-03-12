// 类型断言
function getLength2(sth: string | number): number {
  return (<string>sth).length;
  // return (<boolean>sth).length 错误的
}
// 在需要断言的变量前加上 <Type> 即可

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：
