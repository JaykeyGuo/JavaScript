# 07-函数式编程

#### 函数式编程

一个干净的函数其实是对应的变量的作用域和对应的操作在一个范围内。清晰的定义是函数式编程的一个关键点。

> 函数——**映射关系（一一对应）**
>
> 输入一个参数对应一个结果。

```js
var value = 8;
function fun(x){
    return x + value;
}

fun(1);
value = 9;
fun(1);
```

函数式编程的关键在于对应的函数足够干净，也就是对应的功能做好封装，足够独立。

#### `=>`函数

*[箭头函数- JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)*

对应的function的改变：

```js
function(err){
    option;
};
//一样的效果
(err) => {
    option;
}
```

但是箭头函数的本质不止如此。

#### `app.use()`

中间件的`app.use()`可以一起串联使用，也能独立，关键在于每个中间件能对应的处理error，并给出对应的响应。

P.S:*一个express中间件--[express-ipfilter](https://www.npmjs.com/package/express-ipfilter)*

#### 路由进阶

```js
router.get('/posts/create', function(req, res, next){
    res.render('create');
});
//改为：
router.get('/posts/:xxx', function(req, res, next){
    console.log(req.params);
   	//=> /posts/create
    console.log(req.params.xxx);
    // 对应API的设计
    res.render('create');
});
```

此处的`:xxx`等价于`create`

```js
URL在express中的映射
www.baidu.com
//域名
www.baidu.com/x/y
//路径 =>在express中的映射  req.params
GET www.baidu.com/x/y?id=123
//参数 =>在express中的映射  req.query
POST www.baidu.com/x/y?id=123
//参数 + body数据 =>在express中的映射  req.body
```

P.S: Mac上的快捷键显示APP——*CheatSheet*

#### 编程外话

###### 应用开发工程师需要的能力

> 如何使用API，对应的设计能力

- 函数式编程——对应数学能力，重复调用的稳定性，能够重复使用。
- 结构化编程（考虑全局） => 面向对象编程 => 函数式编程（定义好过程，给出数据，*一次设计，之后能重复使用*）
- **函数式服务**：其实创建服务并不是公司需要的，对应的处理结果才是用户需要的，能够规模化的使用对应的功能。
- react native App就是比较老的手机APP（诺基亚的Java虚拟机），能够调用对应的手机硬件
- 找到对应的大公司的项目，通过技术的切入点，得到对应的大公司关注，好好干活才能弯道超车。

------

作业：lesson 21～27

*阮一峰与连岳的异同？文章的深度和对应的价值*