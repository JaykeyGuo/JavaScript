# 02-作业

#### 知识点

express的项目中一个很牛逼的技术是`next`。

在express的框架中需要注意的是对应的架构，`routers`是血管，`app.js`是大脑，常用的`app.js`的名称还有`index.js`和`server.js`。都是能够形象的看出对应的作业。

`package.json`具有所有的第三方库，也是项目的关键。与Ruby中的`Gemfile`是一样的作用。

express项目的启动是从`/bin/www`开始的，可以通过更改来实习更简单的启动。

---

###### 作业：

`npm start`其实是`npm run start`的简写

npm-run是一个脚本，通过脚本的写入可以定义不同的运行方式。

参考：[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

## Note-Guideline-10

`/routes`是一个提供数据和登记的地方，通过这里来把数据传到服务器。

在`post.ejs`中使用vue来获取数据，有三个部分“element, data, methods”，定义这三个部分之后，需要在html中处理，使得vue能够定位对应的dom的位置。

> element：定位html的位置
>
> data：数据
>
> methods：如何获取数据

其中使用了axios来调用http

一个原则再被体现——**定义函数就立马使用**。

```html
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      postsList: []
    },
    methods: {
      fetchData () {
        axios.get('/posts/list')
          .then(function(response) {
            vm.postsList = response.data.postsList;
          })
      }
    }
  });

  vm.fetchData();
   //调用函数
</script>
```

---

## Note-Guideline-11

两种渲染方式：

> 服务器渲染：在服务器渲染好，再给客户端
>
> 客户端渲染：给一个简陋的页面，通过发起数据请求，通过数据加载来完成渲染。

根据不同的需求来选择渲染的方式，个人博客使用客户端渲染就行，公司页面一定使用服务器来渲染。**原因未知**

---

## Note-Guideline-12

> 在设计WebApp时把提供数据的路由称为接口，一般都带有api。

简化路由，express设计的路由是通过一一对应的方式实现的。

徐帅通过两个路由文件来统一，`route.page.js`负责抓取的部分，`router.api.js`负责给出数据的部分。

一个思路：通过功能来区分，而不是内容，这是计算机思维，如果安装内容来区分，一一对应是最好的方式，但是就好在代码上麻烦。对于机器来说，路由就是分为几个功能的，无论去向哪里只是地点变，方式是没有变化的，生成页面的`res.render`送出数据的`res.send`和`res.json`。

---

一个bug，在`create.ejs`中出现错误，vue中的axios.post的路径获取错误，将`/api/posts/create`写成`api/posts/create`，是对路径层级关系不清晰。

> 路径名` /A/D/9` 是 9 的绝对路径名。第一个斜杠`/`表示（根）目录，该目录是执行搜索的开始位置。路径名的其余部分将搜索定向至 A，然后是 D，最后是 9。
>
> 双句点`..`表示父目录。
>
> 使用点`.`来表示当前目录名。