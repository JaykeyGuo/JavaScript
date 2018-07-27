# 09-Currying与代码逻辑

### express-中间件学习

中间件是彼此依赖的，一个中间件可能出先很多的其他中间件。

在express的项目中，调用的中间件最终需要放回一个带有req、res、next的函数。

### Currying-柯里化

> currying：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数。

```js
//传统方式
function add(x, y) {
    return x + y;
}

//Currying
function add(x) {
    return function (y) {
        return x + y;
    }
}
```

### 复合函数编程

![img](https://ws3.sinaimg.cn/large/006tKfTcgy1ftnhsee76kj309608smx8.jpg)
$$
y = f(x)  \\
z = g(y)  \\
$$
$$
z = g(f(x))
$$

函数式编程的关键是**定义过程（预加载）**，一个函数就像是一个积木块，每个代码之间的参数相互传递，一块一块的执行下去，就像是多米诺骨牌。

```js
function addOne(x) {
    return x + 1;
}

function addTwo(x) {
    return x + 2;
}

function add(f, g) {
    return function(x) {
        return f(g(x));	//使用这个更好
        return g(f(x));
    }
}
//调用
add(addOne, addTwo)(1);
```

在这里的选择，其实是右编译的一个保留，**其实也有可能是“堆栈”的方式。（需要验证）**

#### 函数式编程的特点

1. 纯洁，透明：**相互独立，互不影响**。
2. 可移植：一次编写，多次使用。

```js
//不独立的情况
var num = 3;
function addOne(x) {
    return x + num;
}

addOne(1);  //=>4
num = 5
addOne(1);	//=>6

//相互独立的情况
function addOne(x) {
    var num = 3;
    return x + num;
}
```

##### 代码中的逻辑关系

> ```js
> return ...;
> ...;
> 
> next();
> next(err);
> next("error");
> ```
>
> 何时使用`return`？何时使用`next()`？

`return`的使用是对应，在对应的判断之后，需要`return`，如果是最后的处理是可以不加`return`的。

next的使用对应的是用不同的方式来完成进程，其中的关键就是对应的代码的逻辑顺序。



