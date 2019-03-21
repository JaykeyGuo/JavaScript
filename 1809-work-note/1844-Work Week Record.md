# 1844-Work Week Record

### 181029

- [x] 敦沛的五个页面

### 181030

- [x] 敦沛页面的修改
- [x] 敦沛页面繁体翻译

### 181031

- [x] 敦沛页面繁体翻译完成
- [x] 敦沛打包细节（图片、样式）

##### [深入浅出妙用 Javascript 中 apply、call、bind](http://web.jobbole.com/83642/)

```js
var obj = {
    x: 81,
};

var foo = {
    getX: function() {
        return this.x;
    }
}

console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj));   //81
```

> - apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
> - apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
> - apply 、 call 、bind 三者都可以利用后续参数传参；
> - bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。

### 181101

- [x] 完成焯华的第一个API的修改，实现直接交易
- [x] 还在修改第二个API，添加一个卖出的action

### 181102

- [x] 修改第二个API，可以在请求之后进行刷新
- [x] 敦沛的页面翻译，平台下载
- [x] 敦沛业务合作表单提交