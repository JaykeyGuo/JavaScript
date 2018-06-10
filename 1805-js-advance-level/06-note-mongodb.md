# 06-MongoDB

```sh
data1 => middleware => data2 => Router => data3 => middleware => data4 …… 
```

### API-应用程序接口-Application Programming Interface

两层含义

> 个人开发者：在一个服务直接，不同功能的协作。
>
> 服务端：数据与应用之间的协作——接口编程。

服务端的关键词：**安全**、*健壮*

![](https://ws2.sinaimg.cn/large/006tKfTcgy1fs67gmttvaj30zk0k0k4n.jpg)

设置变量其实是之后需要对入库（数据库）的数据进行检查。

### Mongodb数据库

express是脚手架，其中有不少的指令库，和最基础的库，通过指令库来操作会更方便。

express也支持其他的数据库，Mongodb也支持其他的框架。

Mongodb不方便的地方就是没有对应的数据库的IDE（集成开发环境），但是可以通过终端机来操作。

```sh
$ mongod --dbpath ./db	#启动客户端
$ mongod --host 127.0.0.1 --port 27017	#客户端连接服务端
```

###### Schema是什么？

>其实是一个抽象的概念，可以理解为模型，对应的一个表单，也可以说是一个数据模版。

mongodb与mySQL的区别，mongodb能之间加入数据，mySQL则是需要删掉之后，再新建一个表单。

```js
var PostSchema = new Schema({
    title: String,
    content: String,
    createdTime: String,
    updatedTime: String,
});
```

mongodb能之间创建json格式的数据，对js更方便。

对数据的预处理：是否为空值？

```js
var PostSchema = new Schema({
    title: { type: String, require: true },
    content: { type: String, require: true },
});
```

### 启动服务的指令

```sh
$ DEBUG=first-app:* npm run
```

为什么这么写？

在代码中能够使用对应的debug这个中间件来实现对应的终端log的打印，能清楚的看到对应的服务端的进展和出现的错误。

```sh js
$ DEBUG=express:server	//server的运行log
$ DEBUG=express:app		//app的运行log
$ DEBUG=express:*		//任何地方的log

//只需讲debug引入到对应的代码中即可使用
var debug = require('debug')('first-app:server');
```

**研究sample中的代码来学习。**

#### 数据库的修改

```js
方法( 条件, 操作/限制, callback ){
    add;
    find;
    delete;
    modify;
}
```

---

### 学习的方式

读GitHub上的源代码，清楚每一个工具的作用和使用方法。

**一周讨论学习一个中间件。**

牛逼？？？眼界和见识很重要

------

作业：

1. MongoDB的增删改查的对应指令

2. 一个需求，知道在何处的客户端访问网页，一个中间件express-useragent

   