# 01-JS中阶练习

#### [【10.1练习】](http://xugaoyang.com/post/59d4594184a6827ddebeafef)

用typeof obj ==='object' 判断obj是否是一个object。

事例代码

```js
var obj = {
  name: 'xiaoming'
}

function output(obj) {
  if (typeof obj === 'object') {
    console.log(obj.name);
  } else {
    console.log('obj is not a object');
  }
}

output(obj);
```

[以上代码有缺陷吗？如果有改如何改进？](https://github.com/xugy0926/getting-started-with-javascript/issues/640)

---

###### 有缺陷：

如果对象是null，那对应的结果也是object。

###### 老师的补充：

1. output函数在接收参数传入时，如果参数正好是null，null也是object类型，而null.name会导致代码运行报错。因此一定要排除特殊情况null。
2. 至于传入的obj是否有无name，这个最少不会导致代码运行出错，obj.name即使没有也会默认输出一个undefined。是否必要判断obj中存不存在name，可以依据具体的业务情况来定夺。

修正后的代码

```js
var obj = {
  name: 'xiaoming'
}

function output(obj) {
  if (!!obj && typeof obj === 'object') {
    console.log('obj is a object');
  } else {
    console.log('obj is not a object');
  }
}

output(obj);
```

---

##### 思考

