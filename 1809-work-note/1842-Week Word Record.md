# 1842-Work Week Record

### 181015

- [x] 修了4个bug-文传报表
- [x] 完成文传页面的翻译结构
- [x] 修改文传下载中心链接
- [x] 文传学院的*4级*页面
- [x] 返回顶部的方法，对应跳转的返回页面并跳转顶部
- [x] index页面的翻译

---

#### Note

Vue绑定class的时候需要：`:class="{ active: true or false }"`，需要添加对应的布尔值来实现对应的内容。

Vue的tab切换，可以通过`v-show`来实现，对应赋予一个值来做对应的判断：

```html
<li
    v-for="(item, index) in pageMenus"
    :key="index"
    :class="{on:index === menuIndex}"
    @click="menuShow(index)">
    {{ item }}
</li>
```

页面逻辑中的传输数据和方式，以及设置对应的cookie来更改翻译的版本，这两个功能是比较有意思的也是有难度的，需要花点时间研究一下。


在VS code中配置个性化的emmet，对应的教程也比较简单，是个可以重复使用的方法。

在**Vue组件基本结构**和**JS默认导出文件**中使用比较多

### 181016

- [x] 下载中心、
- [x] product的meta标签，window.title
- [x] 产品页面的翻译
- [x] 使用页面刷新的方式来完成语言切换时出现的组件数组不刷新的情况

### 181017

- [x] 回车触发的无限弹窗的问题：通过dom操作，使得input框失去焦点
- [x] 文传官网的风险提示转移
- [x] 文传官网的app-header的下拉菜单
- [x] 修改一个样式冲突，上线

---

完成了一个项目的从0到上线，从JQ的版本到Vue的版本，这个过程让我对开发的流程有了一个了解，这个过程中，我对一些已有的技术进行了解，也充分的把学到的技术实践起来。

发现之前的前端组长自己写的UI库：[vue-mb-ui](https://github.com/linjiajian999/mb-ui)，使用上是很便捷的，其中的配置其实还有很多可以改进的地方，对于的组件的拓展性也是可以提升的。

从JQ的版本中对样式的创造有了一些新的感触，对于的布局和浮动的理解更加的深刻，BFC的应用是很重要的，在对于的布局中使用BFC可以使得样式的逻辑更加清晰。

在团队协作中，出现的问题只要是冲突，**如何不产生冲突**和**解决冲突**是问题的关键。代码的冲突，CSS样式的重名是关键，在对于的取名上需要在足够详细，同时也要包含对应页面位置的信息。

### 181018

- [x] 修改文传的细节（3处）
- [x] 添加敦沛的app-header

[word-break & word-warp 的区别](http://imweb.io/topic/59fe82991f0e50753869bf8c)

```css
.text-decorate {
    word-break: normal | break-all | keep-all | break-word
}
```

可以通过这个样式来处理单词的换行出现的问题，需要尝试一下，可以来升级Markdown。

**TODO：**学习微信小程序

[CSS content 作为::before与::after的伪类内容](https://developer.mozilla.org/zh-CN/docs/Web/CSS/content)

##### CSS命名的方式

[CSS 样式书写规范](https://zhuanlan.zhihu.com/p/39309819)

> **命名空间规范**
>
> - 布局：以 g 为命名空间，例如：.g-wrap 、.g-header、.g-content。
> - 状态：以 s 为命名空间，表示动态的、具有交互性质的状态，例如：.s-current、s-selected。
> - 工具：以 u 为命名空间，表示不耦合业务逻辑的、可复用的的工具，例如：u-clearfix、u-ellipsis。
> - 组件：以 m 为命名空间，表示可复用、移植的组件模块，例如：m-slider、m-dropMenu。
> - 钩子：以 j 为命名空间，表示特定给 JavaScript 调用的类名，例如：j-request、j-open。

CSS的书写规范，核心在于对于的易于维护，就是在之后的工作中可以更好的调整对于的代码和字符串。

### 181019

- [x] 搭建敦沛的项目结构
- [x] 添加app-footer和修改header
- [x] 添加commodity的页面
- [x] 添加trade的页面
- [x] 新增组件中的数据传值，通过路由的值来做对于的响应

---

### 一周总结

##### 这周做了什么

这周的项目主要是在文传和敦沛的官网，对于的页面修改和翻译，翻译上花的时间比较多，其次就是在一些页面的样式的修改上，需要和美工方面协商才行。再来就是对于的页面的路由的获取和设置，通过对于的页面路由的获取，其实可以做很多的事情，能够监听不同的数据的传入和变化，来实现响应式的功能。

##### *团队协作中的问题*

再来就是在团队协作中的一些问题，样式的书写，不要有类名的冲突，这是第一点，这样不会使得在不同页面之间切换的时候出现样式的错误，这是一个需要注意的细节。

##### *组件的可复用性和拓展性*

再来就是对应的组件的封装和可拓展性的部分，在写组件的时候，需要考虑的不仅是当下可以用到的部分，也要考虑不同的页面是否能复用组件，来提高开发的效率。

Vue中的tab切换不像JQ来的简单，但是Vue中写好了之后，也能够更快的在多处复用。

##### 可以拓展的地方

翻译的部分，如何做得更好。