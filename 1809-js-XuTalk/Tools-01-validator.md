## 01-使用validator来做输入验证

来源：[验证是为了自我保护](https://mp.weixin.qq.com/s/9D18AzpjIzl-qj9_C7wfTw)

```js
const validator = require('validator')

function signin(obj) {
  const { email, pw } = obj;
  if (!validator.isEmail(email)) {
    throw new Error("email error")
  }
  
  if (!validator.isByteLength(pw, { min: 6, max: 20})) {
    throw new Error("password error")
  }
  
  console.log(`it's ok`)
}
```

