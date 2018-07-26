# 08-停下来想一想

### 上下文（Context）

环境给script准备的可以操控的对象，一个全局对象，随时随地可以调用。类似于一个婴儿具备的环境，注意力之外的事物，存在，但是你不一定会注意到，需要的时候再调用。

### 函数式编程 + Currying—编程思想的思考

一个根函数

```js
function add(x){
    return function (y){
        return x + y;
    }
}
```

对于的拓展

```js
var inc = add(1);
var inc2 = add(2);

add(3)(4);
```

**函数式编程，不在乎过程如何，只找到对应的结果。**

`add(3)(4)`一步一个结果，下一步从上一步的结果开始处理。这样的好处是对应的每个步骤都可以被检验和操作，保证每一步都独立。

一个很牛逼的库——Ramda

之前的项目中有这样的处理：

```js
submit () {
	axios.post('/api/v1/signin',
               {
        name: vm.name,
        pass: vm.pass
    })
        .then(function(response) {
        return response.data;
    })
        .then(function(data) {
        window.location = '/';
    })
        .catch(function(err) {
        alert(err.response.data.error);
    })
}
```

`response.data`的处理就是对应的Currying的方法。

------

> 开发与商业的异同，“用户需要的不是钻子，而是墙上的洞”，函数式编程的关键就是找到对应的结果的函数，使得自己的效率提高，并且能一步一步传递下去。
>
> ——我的思考

