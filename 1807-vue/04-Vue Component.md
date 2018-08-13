# 04-Vue 组件

[TOC]

学习时间为180807，此时Vue的指南版本已经为2.0，与教学版本不同，有更多的改进。

### 什么是组件

```js
 // 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
```

通过一个自定义的`HTML`标签名，来引入对应的`HTML`代码，将大量代码打包成为一个标签的方式，就是`Vue`的组件。

> 组件通过`Vue.`来创建，拥有Vue实例的所有属性和特点。

#### is 特性

通过“伪装”，使得浏览器能够解析HTML，再通过组件来实现对应的代码替换。

#### data 必须是一个函数

常规的data是一个Object，在组件中，data必须是一个函数，返回一个Object.

```js
data: function () {
    return {
        count: 0
    }
}
```

#### 通过Prop来传递属性

```js
Vue.component('blog-post', {
  props: ['title'],	//对应的数据绑定，是HTML中的属性
  template: '<h3>{{ title }}</h3>'
})
```

##### 驼峰式命名 VS 短横线式命名 (camelCase vs kebab-case)

HTML对命名的解析，不区分大小写，统一转换为小写的命名，在DOM的属性中使用短横线式是更加清晰的，在JS中使用驼峰式是更好的选择。

当达到JS高级工程师的时候，更倾向于使用驼峰式，因为此时的开发着重点在JS上。命名需要灵活，根据场景来变化。

##### 属性的命名

```html
<div a="1"></div>

<div v-bind:a="1"></div>
```

两者的区别，后者是一个表达式，可以添加其他的变量。而前者只是一个字符串，没有更多的功能。

##### 单向数据流

只能从组件外讲数据传入组件，不能通过组件来将数据传递到外层的组件。这类似于函数式编程，保证了组件的干净，能够多次使用。

##### Prop验证

通过在组件中的设计，来实现对数据的验证，增加代码的健壮性。

```js
Vue.component('my-component'), {
    props: {
        //必须是字符串
        propA: {
            type: String,
            required: true
        }
        //数字，空白值为100
        propB: {
        	type: Number,
        	default: 100
    	}
    	//默认对象
        propC: {
          type: Object,
          default: function () {
            return { message: 'hello' }
          }
        }
    }
}
```

### Vue 实战——TODO-List

[代码实例](https://github.com/xugy0926/learn-vue-sample/tree/master/task)

在组件的代码中，需要注意的，同样是Vue实例，所以对应的`props, template, methods`中，有两个是复数形式。

- 如何使用组件来实现数据的传输？
- Vue如何update数据？
- [学习myjson](http://xugaoyang.com/post/5a6c1f298957a723cf8845e2)

------

###### 下节课：vue-cli