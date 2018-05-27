# 02-对象的属性差异

[【10.2练习】](http://xugaoyang.com/post/59d4597c84a6827ddebeaff0)

对象是js重最重要的概念之一。

在定义对象是，常用的方式是”属性定义“大法：

```js
var obj = {
  name: 'xiaoming',
  age: 18,
  isStudent: true  
}
```

上面obj有3个属性，分别是name、age、isStudent。

1除了”属性定义“大法，可以运用”键值定义“大法：

```js
var obj = {
  "name": 'xiaoming',
  "age": 18,
  "isStudent": true  
}
```

”键值定义“对象方式和json对象格式一样，这也是为什么在js中，所谓的json对象和普通对象经常混为一谈。

这两种方式的共同点是什么？差异又是什么？

---

