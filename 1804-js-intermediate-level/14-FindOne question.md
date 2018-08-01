# 14-一道有趣的查找题

以下是一个二维数组，如何用最最最简单的方式把每个item的第一个元素找出来。

```js
let list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
```

结果应该是1, 4, 7。

---

```js
function getNum(list) {
    return function (postion) {
        return list.map((item) => {
            return item[postion];
        })
    }
}

getNum(list)(0);
```

利用函数式编程来实现，第一个读取数组，第二个读取位置。

------

#### 徐帅时间

利用js的解构语法

```js
let list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let [[a], [b], [c]] = list;
```

这个好玩的题告诫大家需要深度学习一下“解构”。

<http://babeljs.io/learn-es2015/#ecmascript-2015-features-destructuring>

[变量的解构赋值](http://es6.ruanyifeng.com/#docs/destructuring)