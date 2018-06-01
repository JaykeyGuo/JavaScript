# 06-闭包函数认知

```js
function main() {
  var name = 'xiaoming';
  return function () {
    console.log(name);
  }
}

var output = main();
output();
```

main()函数执行会返回一个函数，并赋值给了output。这说明output的定义时再main()外部，但为啥我在main()外部执行output()却可以使用name并正常输出name的值呢？

------

此时的output，其实是对应的一个函数：

```js
ƒ () {
    console.log(name);
  }
```

说明在定义完一个类之后，一个值对应是新的main()，也具有了其中的相同功能。（个人解释）

对应的其实是作用域的关系，在`function main(){~~~}`两个花括号之间的全部都是对应的赋予新值的部分，其中的`function(){console.log(name)}`也是其中的一部分，所以才能在新定义的output中使用对应的方法。

返回的参数也可以是有参的，并且对参数进行处理。

---

知识点：函数变量的作用域，函数也是可以作为返回值的。

