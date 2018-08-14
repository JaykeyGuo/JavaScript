# 05-项目优化 & Vue-CLI

[TOC]

### TODO-List的优化

1. Tag的设置
2. 完善组件中的数据传递
3. 将task-menu进行组件化

#### 组件之间的关系

![image-20180808230958176](https://ws1.sinaimg.cn/large/0069RVTdgy1fu2p3g64mjj30jr0d7mxx.jpg)

###### 组件的数组属性

在组件中更倾向使用`item`来作为数组的绑定属性，这样在访问的过程中能够清晰的知道是数组的元素，无论是对那个数组的处理，最终都是回到item上。

```js
<task-menu ... v-bind:items="menus"></task-menu>
...
<button ... v-for="item in items">{{ item.text }}</button>
```

###### 数据的操作

```js
methods: {
    onSelected(tag) {
        this.$emit('click-select', tag);
    }
}
```

###### $emit 事件传递

![image-20180810234936541](https://ws4.sinaimg.cn/large/006tNbRwgy1fu51h9zyj7j311d0xktgd.jpg)

//需要加深对事件传递的理解

> 不断演练这个例子，熟悉其中的编程的思路，研究其中的细节。

用自己的方式来实现这样的代码，不仅懂得其中的原理，还有对应的肌肉记忆。

#### 组件化开发

将各个Vue组件拆分开来，再通过script来引进，实现组件化和代码的纯净。

##### 另一个视角看HTML

**HTML只是一个标记语言，严格上不是编程语言。**

```js
var person = {
    name: 'xiaoming',
    age: 18
}

var div = {
    id: 'app',
    class: 'container',
    v-for: 'item in items'
}

//div.v-for
```

标签其实就是`div`的一个属性。

在emmet的缩写中就将这样的思想体系出来了：

```html
div.container#app>div.list-group>ul>li.text-danger

<div class="container" id="app">
  <div class="list-group">
    <ul>
      <li class="text-danger"></li>
    </ul>
  </div>
</div>
```

##### 一个思维转变

> 1. HTML、CSS和JS代码的分离
> 2. 通过JS代码来创建HTML

### Vue-CLI

> **命令行界面**（英语：command-line interface，[缩写](https://zh.wikipedia.org/wiki/%E7%BC%A9%E5%86%99)：CLI）是在[图形用户界面](https://zh.wikipedia.org/wiki/%E5%9B%BE%E5%BD%A2%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2)得到普及之前使用最为广泛的[用户界面](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2)，它通常不支持[鼠标](https://zh.wikipedia.org/wiki/%E9%BC%A0%E6%A0%87)，用户通过[键盘](https://zh.wikipedia.org/wiki/%E9%94%AE%E7%9B%98)输入指令，计算机接收到指令后，予以执行。也有人称之为**字符用户界面**（character user interface, CUI）。
>
> ——维基百科

###### 安装

需要Node的版本^8.9.0

```sh
$ npm install -g @vue/cli
$ vue --version
```

###### 创建项目

```sh
$ vue create hello-world
```

之后根据提示就能完成项目的运行，与express的项目很类似。

##### 特点

> 1. 前后端第三方库的融合
> 2. HTML、CSS和JS代码的分离
> 3. 使用ES6的语法

##### 小试牛刀——搬砖

将TODO-List项目通过Vue-cli实现，项目的结构如下：

```vue
- ../my_project/       
    - assets/                       # 放公共文件
    -components					    # vue组件
    	TasksMeun.vue
    	TasksList.vue
    	TasksItem.vue
	App.vue							# 主程序文件
    package.json                    # 配置文件

```

###### `.vue` 文件格式

![image-20180809001551734](https://ws4.sinaimg.cn/large/0069RVTdgy1fu2qzz9vtqj30s30higor.jpg)

######  package的使用

减少script的引入，通过package的安装来实现，可以只安装一小部分，减轻浏览器中的代码量。`import`的引用位置需要一个绝对位置。

------

TODO-List中的数据的传递，是通过一个函数来进行的，两个嵌套的组件，从外部触发`v-on:clilk-complete`，到内部调用方法来操控数据。就行洋葱一样，一层一层拨开来。

Vue-CLI的方式就是将HTML作为组件来开发，在原生的HTML、CSS和JS的基础上，使得开发的过程的关注点更加清晰，这样的好处是很明显的：

1. 代码区分开来，开发效率提高
2. HTML变成组件的一部分，就像函数式编程一样可以多次调用
3. 结构更加清晰
4. 对第三方库的使用更加便利，不再明显区分前后端的差距