# 02-Express项目解读

## nvm 对node版本的管理

```
$ nvm list	//列出已安装的node版本
$ nvm install 7.0.0		//安装node7.0.0版本
$ nvm use 6.4.0			//切换到node6.4.0
```

## npm install的区别

```
$ npm start
$ DEBUG=first-app:*【参数】 npm start
// 两者的区别在于带不同的参数
```

懂得把不懂的参数打印出来，在`bin/www`中用`consloe.log(参数)`。

> 问题1：一个webapp项目应该长什么样？
>
> ——与他人合作的开发经验
>
> 问题2：一个项目最重要的是什么？
>
> ——入口文件
>
> 问题3：一个Nodejs项目**最重要**的是什么？
>
> ——`package.json`里有一切需要的信息.`^`表示版本需要大于等于此版本。
>
> 问题4：依赖包决定了什么？
>
> ——功能、能力

## 项目结构解读

> bin 之中放的是可执行文件。
>
> public 之中放的是**前端**执行的资源文件。
>
> routes 相当于**“动静脉”**，
>
> views 不是必需的，不过如果开发的 WebApp 还有**前端**页面的话，自然也是不可少的。
>
> app.js 相当于程序的**大脑**。

#### `bin/www`文件的核心部分

```javascript
var app = require('../app');
var http = require('http');
//调用 app 和 http
var server = http.createServer(app);
//创建端口
server.listen(3000);
//监听3000端口
```

整个www删掉之后，只需在app.js中加入`app.listen(3000)`，并在package.json中作调整。就能启动项目。

**多余的代码 => 健壮性**

### 关键能力

**识别关键字的能力**

*Http中的[错误码](http://xugaoyang.com/post/59f6b663f8ffd52dca8eb9d6)*

### Express中的`next`

一行一行执行，执行之后不匹配就`next`

---

### 课后作业

`npm start` 和 `npm run auto-start`，为什么前面的命令不用 `run` 就能正常执行，而后面的必须有？



