# 15-轻巧的遍历

数组遍历的方式有很多种，最基础的遍历方式是采用for循环加游标方式。

```js
let list = ['100', '99', '98'];

for(let i = 0; i < list.length; i++) {
  console.log('第' + i + "名：" + list[i]);
}

//output：
第1名：100
第2名：99
第3名：98
```

除了for循环还有foreach方式

```js
let list = ['100', '99', '98'];

list.forEach(function(item) {
    // TODO
});
```

问：使用forEach如何输出和前面一样的结果呢？

------

```js
let list = ['100', '99', '98'];

list.forEach(function(item, index) {
    let rank = index + 1;
    console.log('第' + rank + "名：" + item);
});
```

