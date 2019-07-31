// ECMAScript 内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error("error");
let d: Date = new Date();
let r: RegExp = /{a-z}/;

// DOM 和 BOM 的内置对象
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function (e: MouseEvent) {
  // Do something
});