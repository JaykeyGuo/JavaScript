# 08-Vue Router

[TOC]

目标：再一次移植项目，用Vue Router来实现。

*P.S: 学习时间为2018年8月，此时Vue-Cli已经到达3.0版本，使用更佳便捷，更具视频的教学内容，做出了相应的代码改进。*

### Vue-Cli + Vue-Router

*参考文档：[Vue-Cli 3](https://cli.vuejs.org/guide/)*

```sh
$ vue create my-project
```

或者在项目的目录中执行：

```sh
$ vue ui
```

直接启动Vue UI来创建项目

创建之后可以选择对应的组件：

![image-20180816134254185](https://ws2.sinaimg.cn/large/006tNbRwgy1fubhnwxbmtj30ll0fowfy.jpg)

#### Vue UI

Vue UI是Vue-Cli的一套脚手架工具，通过ui可以直接对项目进行管理。

可以直接选择Vue-Router的组件，完成安装后查看对应的目录：

![image-20180816203226655](https://ws2.sinaimg.cn/large/006tNbRwgy1fubti1u1hvj30np0hv76b.jpg)

可以直接通过UI来添加依赖和插件，与express类似，vue-cli可以通过vue-router来分配对应的路由，形成页面，这样更好的将对应页面的生成和分发。

![image-20180816210252431](https://ws4.sinaimg.cn/large/006tNbRwgy1fubudvjk2yj30yt0w8gqw.jpg)

在UI中也能直接进行编译，同时查看对应的编译之后的数据信息。

### Mint-UI

Element(饿了么)团队开发的一套适配手机的UI界面，在`App.vue`中引用一次即可。

```js
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
```

之后就能在不同的也没使用对于的MintUI，也可以在不同的页面的`.vue`中引用对于的部分，这样更好的来实现对应的内容。减轻编译的代码量，提高效率。

###### 路由的添加

在Vue-Cli 中，添加路由相对来说简单，直接在`router.js`中添加即可，同时需要添加不同的路由需要的`views`的vue页面。

------

参考资料：

1. [Vue-Cli 3.0](https://cli.vuejs.org/guide/)
2. [Vue Router](https://router.vuejs.org/zh/)
3. [Mint UI](https://mint-ui.github.io/docs/#/)