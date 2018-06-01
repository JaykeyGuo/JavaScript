# 04-模版引擎

# Express中间件--Router

Router是Express的一个内置的中间件。

```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // 修改title的值为'my first WebApp'
  res.render('index', { title: 'my first WebApp' });
});

module.exports = router;
```

通过Router这个中间件，才能使用对应的`router.get/post/patch/put/delete`这些命令来处理对应的请求。

在`app.js`中才能通过`app.use('/', index)`的语句来把对应的路径指向对应的页面。

### Http请求方法

| 方法   | 作业                       |
| ------ | -------------------------- |
| GET    | 请求指定页面，返回主体     |
| POST   | 提交数据进行处理请求       |
| PUT    | 向Server传送数据到指定位置 |
| DELETE | 请求删除指定页面           |
| PATCH  | 更新局部资源               |

在路由的设置中，尽量使用对应的http请求来设置路由，而不是对应的设置不同的页面，这样更方便，在开发的时候也更清晰。

> 路由的设计，设计完就使用，需要才写。

## 模版引擎--ejs

EJS其实是JS的一个第三方库，优秀的第三方库。在入门学习的时候更好上手，使用的场景不同，在最初的express的使用中使用ejs有利于对应的理解。jade等其他的文件也有不同的优势。

> 看待技术，就像看待性格一样，需要根据场景来使用。

ejs的使用也是十分简单的，通过几行代码就能把对应的事情完成。

```js
// routes/index.js
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');

router.get('/', function() {
    // 手动读入模板文件
    var content = fs.readFileSync(path(__dirname, '../views/index.ejs'));

    var pathString = path.join(__dirname, '../views/index.ejs');
    // 手动渲染引擎
    var html = new EJS({url: pathString}).render({title: 'Hello World'});
    res.send(html);
});
```

如果不使用ejs，手动引入是上面这样的。

### 一个后缀`.locals`

对应当下请求的一个变量

```js
router.get('/', function(req, res, err) {
   res.loacls.path = path; 
})
```

### 使用`markdown-it`渲染makdown

在前端渲染

```js
//index.js
var markdown = requier('markdown-it');

router.get('/', function(req, res, next){
    res.locals.markdown = markdown;
    res.render('index', {title: 'hello world'});
});

//index.ejs
	<%= markdown.render(title) %>
```

在后端渲染

```js
//index.js
var markdown = requier('markdown-it');

router.get('/', function(req, res, next){
    res.locals.markdown = markdown;
    var title = markdown.render('title');
    res.render('index', {title: 'hello world'});
});
```

---

作业：

`app.locals`和`res.locals`有什么区别？