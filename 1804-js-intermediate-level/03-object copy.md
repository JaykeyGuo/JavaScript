# 03-对象的浅拷贝

[【10.3练习】](http://xugaoyang.com/post/59d4599b84a6827ddebeaff1)

```js
var obj = {
  count: 1
}

function output(obj) {
  obj.count = obj.count + 1;
  console.log(obj.count);
}
```

在上面代码之后，执行下面代码分别输出什么？

```js
output(obj);
console.log(obj.count);
```

1. 假如两个值不一样，为什么？
2. 假如两个值一样，为什么？有没有办法保证output函数内的obj.cout的改变不影响外面的obj.count？

---

###### 输出：

```js
2	//output(obj);
1	//console.log(obj.count);
```

1. 两个值不一样，是因为在函数中的obj对象与外界的obj对象其实是两个。
2. 两个值一样可能是，函数里面的参数影响到了外面的obj对象。使得两个值同时变化。要想内外的两个参数不影响需要在函数中使用另一个参数：

```js
var obj = {
  count: 1
}

function output(obj) {
    var objInner = obj;
    objInner.count = objInner.count + 1;
    console.log(objInner.count);
    return objInner
}
```

---

###### 验证：

```js
//正确的输出结果
2	//output(obj);
2	//console.log(obj.count);
```

证明函数处理对象之后会的相同的对象有影响。

---

### 知识点

对对象的值进行处理，其实不是**赋值**而是**引用**。所以即使通过一个新的变量来引用对应的属性，也是对原来的对象的处理。

徐帅给出的方法：*函数的形参对象变量其实就是实参变量的引用，所以是同一个。*不影响外界变量的方法是：

```js
function output(obj) {
  obj = Object.assign({}, obj);
  obj.count = obj.count + 1;
  console.log(obj.count);
}
```
```js
function output(obj) {
  obj = JSON.parse(JSON.stringify(obj));
  obj.count = obj.count + 1;
  console.log(obj.count);
}
```

其实都是复制了一个形参obj对象。

---

> `Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
>
> `JSON.parse()` 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。