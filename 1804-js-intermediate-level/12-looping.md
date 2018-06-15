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

