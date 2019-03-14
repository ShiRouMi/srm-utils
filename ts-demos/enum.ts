// 取值被限定在一定范围。
enum Days {
  sun,
  mon,
  Tues
}
console.log(Days["sum"] === 1);

enum Days2 {
  sum = 7,
  mon = 1
}
console.log(Days["Tues"] === 2);

// 手动赋值的枚举项可以不是数字, 需要使用类型断言来让 tsc 无视类型检查
enum Days3 {
  sun = 7,
  mon,
  tue,
  sat = <any>"s"
}
// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1

// 常数项 计算所得项
enum Color {
  Red,
  Blue,
  Green = "Blue".length
}
// 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：

enum Color2 {
  Green = "Green".length,
  Red
}
// 这样就是❌

// 常数枚举
const enum Directives {
  Up,
  Down,
  Left,
  Right
}
let directions = [
  Directives.Up,
  Directives.Down,
  Directives.Left,
  Directives.Right
];

// 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

const enum Directives1 {
  Up,
  Down,
  Left,
  Right = "Right".length // ❌
}

// 外部枚举
// declare enum
// declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
// 同时使用 declare 和 const 也是可以的

declare const enum Directives2 {
  Up,
  Down,
  Left,
  Right
}
let directions2 = [Directives2.Up]