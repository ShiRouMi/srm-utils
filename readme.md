## 使用

```js
import $$ from 'srm-utils'
$$.setStore('TOKEN', 123)
$$.getStore('TOKEN')
$$.removeStore('TOKEN')
$$.clearStore()
$$.store(false).setStore() // 存储到 sessionStorage
```