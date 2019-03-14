// function isString(val) {
//   return typeof val === 'string';
// }

function isString(val: string) {
  // 用 ts 编写的话，上面这个函数就没有意义了
}

// 字符串字面量类型
// 字符串字面量类型用来约束 取值只能是某几个字符串中的一个

type EventNames = "click" | "scoll" | "mousemove";

function handleEvent(ele: Element, event: EventNames) {}

handleEvent(document.getElementById("id"), "scoll");
// handleEvent(document.getElementById("id"), "rescoll");
