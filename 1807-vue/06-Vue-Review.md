# 06-Vue-组件知识点回顾

[TOC]



组件是通过Vue将HTML、CSS和JS封装形成的一个独立的代码模块，可以**重复使用**，可以随意访问，降低代码的重复度。

> 两个目的：
>
> 1. 共用
> 2. 对页面进行切分管理

###### 全局注册&局部注册

局部注册的组件适用于对页面进行切分管理，全局是通用模块的方式，例如navbar和footer。

###### **单向数据流**

------

所有的prop都使得起斧子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生更新时，子组件中所有的prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

这里有两种常见的试图改变一个 prop 的情形：

1. 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的data属性并将这个prop 用作其初始值：

   ```js
   props: ['initialCounter'],
       data: function () {
           return {
               counter: this.initialCounter
           }
       }
   ```

2. 这个prop以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个prop的值来定义一个计算属性：

   ```js
   props: ['size'],
       computed: {
           narmlizedSize: function () {
               return this.size.trim().toLowerCase()
           }
       }
   ```

> 注意在JavaScript中对象和数组时通过引用传入的，所以对于一个数组或对象类型的prop来说，在子组件中改变这个对象话数组本身将会影响到父组件的状态。

------

通过v-bind来向组件中传入数据，在组件中通过prop来接受，组件中最好只调用prop的数据，而不是做出更改，如果一定需要更改，通过计算属性来修改。

##### Prop

###### Prop 的验证

> JS的一个缺点：数据类型是不确定的。

 设定数据的时候也需要了解其中的类型定义方式的差别。

> `type` 可以是下列原生构造函数中的一个：
>
> - `String`
> - `Number`
> - `Boolean`
> - `Array`
> - `Object`
> - `Date`
> - `Function`
> - `Symbol`

##### 自定义事件

###### 将原生事件绑定到组件

通过`.native`来实现浏览器原生事件的绑定。

```html
<div v-on:focus.native></div>
```

###### 非父子组件的通信

方法：在公共的空间中创建一个空的Vue来实现不同组件的通信。这是与单向数据流冲突的方式，更好的解决方式是通过Vuex来实现。

##### 插槽

###### 插槽内容

```html
<div id="app" v-bind:title="title">
	<hello>
        {{ title }}
    </hello>
</div>
```

```js
Vue.component（'hello'） {
    prop: ['title'],
    template: `
	<div class=container>
		<slot></slot>
	</div>
	`
}
```

这样就能在div里实现对应的title的显示。

###### 编译作用域

```html
<task-menu v-bind:items="tasks">
	<task-title v-bind:content="menuTitle"></task-title>
</task-menu>
```

```js
Vue.component('task-title', {
  props: ['content'],
  template: `<h1>{{ content }}</h1>`
});

Vue.component('task-menu', {
  props: ['items'],
  template: `...`
  ...
})
```

两个组件是平级的关系，但是menuTitle的数据仍旧是从父级作用域传来的，并不是想父子组件一样一层一层传进去的。

###### 多个插槽的应用

```html
<base-layoutbase-layout>
  <h1 slot="header" content="页眉">Here might be a page titleHere might be a page </h1>
  
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <p slot="footer" content="页脚">Here's some contact info</p>
</base-layout>
```

这样就能通过插槽来定义一个简单的模版。

##### Q & A

###### Q 组件和插槽的关系？

关键在于**“颗粒度”**的大小，插槽是一个最小的颗粒度，**1.**最简单的组件是拥有Vue实例的一个模块，可以包含HTML、CSS和JS，功能是完整的。**2.**插槽就是个极小的组件，完成一小部分的功能，例如一行文字的显示，对应的样式的不同。**3.**通过插槽的应用不会对整个组件会有太大的影响。

###### DOM树的生命周期

利用`document.getElementById('app')`在`beforeCreate`之前对DOM的渲染过程。

```js
beforeCreate(){
	console.log(document.getElementById('app'));
} 
```

##### **小结**

###### Vue 文档学习建议：

1. 基础：必须掌握
2. **组件**：核心关键
3. 过渡化 & 动画：在工作中提高，之后
4. 可复用性：在项目中学习更佳
5. 其他部分作为拓展

Vue的使用，在Vue-CLI中更佳，在原生的HTML中使用可以提高，但是开发效率并没有太大的提升。

Vue-Router和Vuex是更进一步的知识，需要在实战项目中学习。

> **学习一定不要忽冷忽热，一定要每天都钻研一点东西，这样坚持下来，效果更好。**