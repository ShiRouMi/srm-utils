# srm-utils

## 使用

## Store
```js
import $$ from 'srm-utils'
$$.setStore('TOKEN', 123)
$$.getStore('TOKEN')
$$.removeStore('TOKEN')
$$.clearStore()
$$.store(false).setStore() // 存储到 sessionStorage
```

## Event
### API
- on 注册事件监听
- off 移除事件监听
- once 注册一次事件监听，只能触发一次 emit 触发后即自动从监听中移除
- emit 触发事件

**示例**
```js
import $$ from 'srm-utils'
$$.on("testEvent", function(event) {
  console.log("测试事件添加，传入参数为" + event);
});
$$.emit("testEvent", "事件触发成功");
$$.off("testEvent");
$$.$once("testOnce", function(event) {
  console.log("事件仅仅触发一次，传入参数为" + event);
});
```