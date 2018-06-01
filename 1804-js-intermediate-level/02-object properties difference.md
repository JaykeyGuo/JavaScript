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

除了”属性定义“大法，可以运用”键值定义“大法：

```js
var obj = {
  "name": 'xiaoming',
  "age": 18,
  "isStudent": true  
}
```

“键值定义”对象方式和json对象格式一样，这也是为什么在js中，所谓的json对象和普通对象经常混为一谈。

这两种方式的共同点是什么？差异又是什么？

---

#### 共同点：

在属性或键值没有特殊符号“空格”的时候，两者的调用几乎是相同的，可以通过键值来调用或者用属性来调用。

```js
var obj = {
    name: Jaykey,
    age: 18,
    "isStudent": true,
}

obj.name	//=> Jaykey
obj[age]	//=>18
obj.isStudent	//=>true
```

#### 差异：

在键值中有空格，纯数字时，只能使用键值的调用才有效，否则会报错。

```js
var obj = {
    tower: "塔",
    101: "台北101",
    "canton tower": "广州塔",
}
obj.101		//error
obj.canton tower	//error
obj[101]	//"台北101"
obj['canton tower']	//"广州塔"
```

#### 补充：

键值必须使用**“双引号”**。

键值的使用不局限于值，对应的键值也可以是函数、表达式。

###### 例子—动态的键

```js
var obj = {};

getData(page) {
  axios.get('url', params: {page}).then(function (response) {
    obj['page=' + page] = response.data;
  });
}

getData(1);
getData(2);
getData(3);
```

