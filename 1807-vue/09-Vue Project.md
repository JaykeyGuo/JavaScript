# 09-Vue 实战项目

[TOC]

#### 项目信息

使用Vue-Cli来实现对应的项目

需要安装的第三方库：

```sh
$ npm i --save axios

$ npm i --save ramda

$ npm i --save mint-ui
```

项目架构：

```sh
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api
│   │   └── tasks.js
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── HelloWorld.vue
│   │   ├── History.vue
│   │   └── Tasks.vue
│   ├── main.js
│   ├── router.js
│   └── views
│       ├── History.vue
│       ├── Home.vue
│       └── Tasks.vue
└── vue.config.js
```

Vue-Cli 3.0与2.0的差别：使用Vue Router，会形成对应的views，逻辑是先通过`router.js`来分发路由，之后再进行对应的**组件化**。

> `router.js` => `views` => `components`

##### Vue-Cli中的第三方前端库

就像后端的包一样，前端的第三方库，在Vue的项目中也能通过对应的安装来完成，这一点与Ruby on Rails中的Gem类似，是的对应的使用库更好管理。

#### Vue-Router对页面的分发

```html
<router-link to="/">Home</router-link>
<router-link to="/tasks">Tasks</router-link>
```

使用对应的插入式路由，好处是对应的路由只需要一个`to`的属性就能搞定了，同时还有另外一种路由的分配方式，通过对应的编程式路由来实现：

```js
router.push
```

##### Mint-UI 的使用细节

在不同的组件中使用对应的“组件”才能顺利的运作。

每个mint-ui的组件的使用都需要对应的**引入**和**导出**。

##### `.vue`的注意事项

每一个`.vue`文件的模版中只能有一个HTML的根节点，如果有两个则会报错。

### API的处理

```sh
└── src
    ├── api
        └── tasks.js
    └── components
```

项目中单独分离出一个API的文件夹来汇总各个页面和组件的对应请求，这样的好处是能够将对所以的请求做一个监听，方便后期的管理和维护。同时也将提高页面和组件中的代码的语义化。

##### 两种 API 的管理方式

第一种是将所有页面的API单独放在一个文件夹里。

第二种是将各自的API和页面一一对应，打包成文件夹：

```sh
└── components
    ├── HelloWorld
    │   ├── HelloWorld.vue
    │   └── api.js
    ├── History
		│   ├── History.vue
		│   └── api.js
    └── Tasks
		    ├── Tasks.vue
		    └── api.js
```

各有各的好处，主要是个人的代码习惯。

------

###### 画外音

面试原则，谈好薪资之后就不要总讨价还价了，这样会给对方留下不好的印象。

