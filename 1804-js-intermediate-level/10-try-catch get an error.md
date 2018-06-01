# 10-try-catch中抛出一个错误

[【10.10练习】](http://xugaoyang.com/post/59dc4c461e5876057be9fa56)

在使用try-catch时经常会处理异常问题。

```js
let count = 100;
try {
   if ( count < 100) {
     throw "哇喔，错误了";
   } else {
     // work well.
   }
} catch (e) {
    console.log(e);
}
```
```js
let count = 100;
try {
   if ( count < 100) {
     throw  new Error("哇喔，错误了");
  } else {
     // work well.
  }
} catch (e) {
    console.log(e);
}
```

以上throw用了两种做法，你觉得那种好，为什么？

---

第二种好，直接告诉你是错误，在chrome的Console中能够直接给出报错。第一种只是一种字面通知，第二种是带着警告的通知。

#### 一个原则：

> 当你不知道如何判断时，你只要坚持一个原则，throw后面就跟new Error().