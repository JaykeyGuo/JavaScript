# 12-优化循环处理

[【10.12】](http://xugaoyang.com/post/59df03e557b7344a443dc8c1)

这是一段从项目里摘出来的代码。

从服务端获取很长的公钥key时，服务端会分成三段给客户端，客户端拿到三段字符后第一件事情是进行长度的检查，提取key的长度是必要的操作。

```js
var publicKeyList = ["code1-3443", "code2-f8759", "code3-196433"];
var lengths = [];

for (var i = 0; i < publicKeyList.length; count++) {
  var item = publicKeyList[i];
  lengths.push(item.length);
}
```

以上代码真的很不简洁，你能给出一个间接的代码段吗？

---

```js
var publicKeyList = ["code1-3443", "code2-f8759", "code3-196433"];
var lengths = publicKeyList.map((item) => {
    return item.length;
})
```

#### 徐帅时间

> 一般简洁的代码体现出两个点：
>
> - 简洁的语法。数组的遍历有很多种方式，for循环是最基础功能最单一，数组还提供了其他的遍历方式，功能能力都比for要强大，还简洁。
> - 声明尽量少的变量。变量越多，看上去越清晰，但是可能带来变量污染的情况。比如：发生了命名相同的变量导致代码出问题。