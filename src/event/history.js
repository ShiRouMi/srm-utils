// HTML5 人为操作浏览器历史记录

// 浏览器历史记录 === 》 栈
// 用户每点击一个新网页 ===> 入栈
// 用户每次点击后退 ===》 出栈

// 无刷新更改地址栏，假如当前页面为 www.baidu.com
window.history.pushState(null, null, "hello")
// 此番操作后，地址变为 www.baidu.com/hello,但同时页面不会刷新，不会去检测目标页面是否存在

// 执行 pushState 后，往浏览器历史记录添加一个新纪录，改变地址栏地址内容
/* 接收三个参数
一个对象或者字符串，用于描述新记录的一些特性。这个参数会被一并添加到历史记录中，以供以后使用。这个参数是开发者根据自己的需要自由给出的。
一个字符串，代表新页面的标题。当前基本上所有浏览器都会忽略这个参数。
一个字符串，代表新页面的相对地址。
*/
var state = {
  id: 2,
  name: "profile"
};
window.history.pushState(state, "My Profile", "/profile/");

// 当用户点击 「前进」 「后退」按钮时，会触发 popstate 事件
window.addEventListener("popstate", function(e) {
  var state = e.state;
  // do something...
});

// replaceState
// 你希望不添加一个新记录，而是替换当前的记录（比如对网站的 landing page），则可以使用replaceState方法。这个方法和pushState的参数完全一样。