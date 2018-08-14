# 01-介绍 Vue.js

[TOC]

![image-20180731220018676](https://ws2.sinaimg.cn/large/801b780agy1ftte4iaf13j20rb0iygon.jpg)

###### Vue的特点

- 易用：通过已有知识就能使用
- 灵活：只需一个script引入就能使用
- 高效：速度很快

------

##### 什么是渐进式框架？

从一个小点出发，不断提升功能和满足更多需求的过程，就是渐进式。

每一个组件（积木），找到你需要满足的积木，进行调用即可。

![image-20180801105657632](https://ws1.sinaimg.cn/large/006tKfTcgy1ftu0kltcy2j30wg0oagp4.jpg)

> **声明式渲染** => **组件系统** => 客户端路由 => 大规模状态管理 => 构建工具 => 数据持久化

可以根据自己的需求来使用不同的功能，Vue主要解决“声明式渲染”和“组件系统”的功能。

> Vue is designed from the ground up to be incrementally adoptable.
>
> Vue 被设计为可以自底向上逐层应用。

这是对渐进式的一个解释，一层一层向上开发，每一层对应的最小单元组件都已经做好。

> The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.
>
> Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。

重心在HTML与Data的交互过程中。

###### CDN 的使用

用*BootCDN*来查找对应的CDN，速度会快很多。

*开发时使用：具有一些调试的功能*

```html
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
```
*上线时使用：更轻便*
```html
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.min.js"></script>
```

------

##### 什么是声明式渲染？

标记和说明，告诉计算机需求，计算机自动去完成绑定和对应的效果。HTML与JS相互独立，不关注在两者的关系绑定上，更加注重数据的呈现。

### Vue 代码-初识

#### 数据绑定

##### {{ message }}【属性的数据(内容)】

```html
<div id="app">
  {{ message }}
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

数据动态绑定，Vue中的数据做出了一一映射。

##### v-bind【标签属性的内容】

> `v-bind:title`将这个元素节点的 `title` 特性和 Vue 实例的 `message` 属性保持一致

```html
<div id = "app-2">
    <span v-bind:title="message">
       鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
</div>
```

```js
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()	//只生成一次
  }
})
```

**Vue 实例**：包含了对应的`el`和`data`两个属性，也包含其他Vue设定的属性。

🤔思考：为什么之间`message`，而要添加`data`这一层？可能的原因是对应的数据分类，`el`、`message`和`methods`三类来区分了Vue对象中具有不同功能的数据，可能提高对应的速度。

#### 条件

##### v-if【标签的可见性】

```html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```

```js
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

直接关注对应的`seen`的值，`true`就显示，`false`就不显示。

#### 循环

##### v-for【循环】

```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})
```

`v-for="todo in todos"`很清晰的能读懂对应的内容，并循环数组显示对应的内容。

 vue的循环的代码十分语义化，与JS原生的循环还是有所差别，[JavaScript 的所有循环遍历方式](http://xugaoyang.com/post/5a62fb1d1d92b0371315ab35)，

###### 一个问题：为什么能用函数的方式，不能用数组添加的方式？

```sh
//无效的Vue操作
app4.list[3] = {text: "hello, js"};

//有效的Vue操作
app4.list.push({text: "hello, js"})；
```

##### v-model【输入】

>  `v-model` 指令，它能轻松实现表单输入和应用状态之间的双向绑定。
>
> 在学习编程的时候，很多同学对输入的概念不太理解。其实用户的操作都叫输入，不只是用户用键盘输入的文字，用户点击标签也是输入的一种。

##### v-on:click【点击事件】

`v-on:click="functionName"`点击事件触发一个对应的操作。

```js
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```

### 组件化

个人理解：组件化，就是将能够实现部分功能的代码进行“打包”，使得往后再开发中能够调用。组件就是一个具有一定功能的代码，`div`是一个组件，一个判断语句也是一个组件。

*一个类比：PPT中的几个画图元素构建的一个“组合”，就类似于一个组件。*

```html
<div id="app-7">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
  </ol>
</div>
```

```js
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})
```

通过`component`来实现对应的组件，并且能通过Vue来实现数据的绑定和更新。

还有一种更帅的方式来实现组件化，让人看不出痕迹。

```html
<script src="./lib.js"></script>

<div id="app-7">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
  </ol>
</div>
```

```js
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})
```

```js
//filePath: ./lib.js

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```

让组件化的代码作为第三方库来实现。

------

#### Vue 初体验

`Vue`给我的直观感受是简单，在使用中不会出现太多的麻烦，对应的属性的绑定和更新写的十分语义化。看了尤雨溪的视频和文章，感觉到这个程序员的那种“自由”，喜欢代码。

之后的Vue学习还会涉及到不同的知识，Node、Webpack和基础的HTML、CSS和JS也是必须的。继续努力！

*参考资料：*

[新手向：Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551)

[Webpack起步](https://www.webpackjs.com/guides/getting-started/)

[Vue.js介绍](https://cn.vuejs.org/v2/guide/)

[Flow](https://flow.org/)

------

### 学习清单

> 1. Vue
> 2. Vue-cli
> 3. Webpack
> 4. Eslint
> 5. babel