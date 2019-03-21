# 1841 Work Week Record

### 181008

1. 完成文传官网的产品页面的修改

   使用JQ来完成对应的页面响应

   对应修改不同页面的CSS
2. 在页面的顶部一个跳转的a标签，存在一个问题，a标签中是空，无法点击到，解决的方法就是把对应的a标签的css更改，加入背景图片。

### 181009

- [x] navbar的跳转
- [x] footer的跳转 + 容错性处理
- [x] info页面的下载中心
- [x] collage页面的下移功能
- [x] 压缩图片大小，重新切图，使用 [tinypng](https://tinypng.com/)来压缩图片
- [x] 使用公司的代码规范来修改

### 181010

> CSS书写顺序
>
> 1. 位置属性（position, top, right, z-index, display, float.etc）
> 2. 大小（width, height, padding, margin.etc）
> 3. 文字系列（font, line-height, letter-spacing, color-text-align.etc）
> 4. 背景（background, border.etc）
> 5. 其他（animation, transition .etc）

- [x] 再学习BFC和对应的CSS布局

##### Vue 全家桶 + CRUD

- [x] 【1-index】index 添加一个btn到对应的个人页面，并且能从info页面跳转回去
- [x] 【2-show】新添加一个info组件，展现基本信息（姓名、年龄、性别、出生年月），**并把数据写入vuex**
- [x] 【3-update】添加一个按钮点击后，修改vuex里的数据并更新显示页面

### 181011

*Important Not emergency TODO*

[将H5网站转换成原生体验的App](https://blog.csdn.net/hbcui1984/article/details/78607876)

```html
<todo>
	H5代码 => 打包成 Android apk 或者 ios app
    前端代码还是在服务器上，可以较快更新
</todo>
```

- [x] 文传首页-html-apsx的下载中心的表格下载

**代码规范**

*Vue router-link*

```html
<!-- 纯文本的路由 -->
<router-link
  class="info-item-content"
  :to="{name: 'product'}">Cookies
</router-link>
<!-- 标签的路由 -->
<router-link
  class="info-item-content"
  :to="{name: 'product'}">
  <span>Cookies</span>
</router-link>
```

*Vue js*

```JS
    name: {},
    minxins: {},
    components: {},
    props: {},
    data: {},
    computed: {},
    watch: {},
    filters: {},
    methods: {},
    生命周期函数: {}
```

*CSS类的书写：*

使用`.active`来定义触发之后的类变化

- 完成二级路由组件

### 181012

- 完成‘三级路由组件’
- 修改文传学院的页面
- 完成三级路由页面组件的添加

---

### 周总结

这周的工作，主要是完成一个项目从JQ到Vue的板砖，没有用到新的功能，对应的页面也比较熟悉，对应的Vue全家桶也清楚的知道如何操作。

体会到工作中的成就感，写出一个小功能，就能给自己一点点自信，在这个过程中，也回去学习和回顾以前学到的知识，这个过程让我把实际学习的东西用了起来。这次是关键所在，基本没有超过时间完成任务，能够给自己更多的时间去看看其他的技术文档。

对于基础的部分，还是不够扎实，就是没有**“实践”**，不能很快的应用出来。

再者就是对“需求”有了很深的了解，知道如何去把对于的需求改好，如何问清楚要做什么，其实这是写代码之前比较关键的一部，代码其实没有这么重要。

在Coding的部分，需要掌握更多的工具和方法来提高效率，也要对基础做巩固。

在非Coding的部分，要注意交流，知道自己的需求是什么，什么功能自己能做出来，想好对应的细节和方法，这样做起来更快，也会省去之后修bug的时间。