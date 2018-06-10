# 05-中期回顾

保留字（关键字）的目的：给未来的发展提供空间。

## Experss回顾

> 关键文件：`package.json`
>
> 通过`package.json`来知道这个项目有什么功能，在GitHub上更重要的是`ReadMe.md`

###### express => 脚手架

有一个框架，然后往其中添加代码，来实现各种功能。添加代码其实就是搬砖。

网页其实就是从require到response的过程，通过路由的进入，到各种中间件的处理，到各个页面的呈现。

> 关键点：**next**/**req对象**/**res对象**
>
> next是express中十分重要的一个对象，可以通过next使得各个部分能够顺利进行。
>
> express将各种散落的请求抽象成req和res的对象，通过处理req和res对象来实现不同的功能。
>
> **拿到req的数据，做处理，然后返回res。**

#### express对路由的处理流程

```js
//app.js

app.use('/', function (req, res, next){
	console.log('process 1 = '+ req.path );
    next();
}, page);

app.use('/', function (req, res, next){
	console.log('process 2 = '+ req.path );
    next();
}, api);
```

*PS：这是一个判断流程的方法。*

对应页面结果

```sh
http://localhost:3000
process 1 =/

http://localhost:3000/posts
process 1 =/posts
GET /posts 304 22.679 ms - -
process 1 =/api/posts
process 2 =/posts
```

所有请求都是从上到下开始查找，找到对应的就进行处理，没找到就报错。

`route.page.js`与`route.api.js`的命名方式就足够的直接和形象，其实最初是node作者的习惯。

##### 无处不在的中间件

处理通常的处理，框架也提供了很的帮助，例如路由中的`app.use('/',  function(req, res, next) { xxxx; }, page)`其中的page就是内置的中间件，通过其中的处理来完成对应的操作，只有一个page就完成了对应的路由处理。

使用这些中间件，会减少代码量，同时也会出现更少的报错。

### 再次被提及的json

这是一个js中轻便的数据类型，多种语言都能兼容json。

