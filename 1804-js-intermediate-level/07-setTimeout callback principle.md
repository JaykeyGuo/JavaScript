# 07-解释setTimeout的回调执行的原理

```js
function output() {
  var name = 'xiaoming';
  setTimeout(function () {
    console.log( name);
  }, 1000);
}

output();
```

能解释一下为啥setTimeout中的回调函数为啥能访问output的变量name吗？

---

此时的setTimeout其实也是一个对应的函数，在output的作用域中，其次就是function函数。所以对于一个全局变量var name，在其中的任何部分都是能够使用的，其次就是setTimeout的作用，即使在'0000'秒后执行，也会在其他代码之后执行。所以也就能访问name变量。

其实是对应闭包的知识点：

> 所有的JS函数都是闭包：它们都是对象，它们都关联到作用域链。

---

老师的补充：

> setTimeout的第一个匿名函数的作用域能访问setTimeout执行时的上下作用域，这也就是为啥匿名函数内部可以访问变量name的原因。

#### 闭包的进阶认识：

```js
//如果能理解以下两个片段代码的运行机制，就彻底算是理解闭包了。

var name = "The Window";
var object = {
  name : "My Object",
  getNameFunc : function(){
    return function(){
　    return this.name;
　  };
　}
};

console.log(object.getNameFunc()());

var name = "The Window";
var object = {
  name : "My Object",
  getNameFunc : function(){
    var that = this;
　   return function(){
　      return that.name;
　　};
　}
};

console.log(object.getNameFunc()());
```

闭包的关系可以用维恩图来体现：

![](https://ws3.sinaimg.cn/large/006tNc79gy1frvxxtv8ehj30mg0q5q5z.jpg)

每个闭包或函数只管理自己的区域，可以通过变量来传输对应的数据。