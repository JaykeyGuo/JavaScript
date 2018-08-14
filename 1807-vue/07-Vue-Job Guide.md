# 07-Vue-技术求职分享

[TOC]

### 主动！

不同的年龄会有不同的问题，刚上路的时候，不会有太多的迷茫，找到一个技术的路去精进。

在“老一点”，要规划，要长远的规划。

这也是在我选择做技术工作的时候的一个考虑，之后继续做技术的需求可能不再是满足别人的需求，而是满足自己的需求，可能是和朋友创业，可以是“玩技术”来实现一些有趣的东西。这些才出推动自己前进的事情。

**每日好好学习技术。**

### 工作指导

> 去了一家公司之后，不要去否定别人，而是应该不断地否定自己，想想自己为什么提高得这么慢，而不是去想公司的项目怎么这么垃圾，这跟自己没关系。

初级工程师的定义：能够独立完成一个任务，更具分配的任务和需求来实现。

### 技术进阶

精通两种语言“动态语言”&“面向对象的语言”

webpack与Vue-Cli的差别

#### 工作之后的学习方向

1. 对前端工具和代码的学习：Vue-Router，Vuex，DOM，CSS
2. 在精通JS之后，再学习另一门不同的语言，Golong，Java等
3. 做长远的规划，继续做技术？还是做出其他的变化，技术是工具，也是前进的一个方向。

------

### Vue 文档学习

###### 生命周期

在看生命周期图示，发现是一个完整的时间轴，从一个Vue的创建到删除。

> `beforeCreate => created => "el" => "template" => beforeMount => mounted => beforeUpdata => updata => beforeDestroy => destroy`

一个完整的CRUD，其中加入了对`el`的监听和`template`的加载。

###### v-code

|      Vue Code      |      Function      |
| :----------------: | :----------------: |
|   {{ message }}    |      绑定数据      |
|       v-html       |      原始HTML      |
| v-bind:###【:###】 |      绑定属性      |
|        v-if        |      条件渲染      |
|  v-on:###【@###】  | 监听事件，触发事件 |

> 当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。

###### 计算属性

对原有数据的处理，和再显示，使用计算属性来做计算和调整。使用一次即可，不像函数一样，使用一次调用一次，就像是一个计算器，完成一次计算之后，能持续看到结果。

对计算属性的修改需要使用对于的访问器和修改器，通过`get` 和`set`函数来实现。

###### v-for

|               Vue Code                |   function   |
| :-----------------------------------: | :----------: |
|        v-for="value in object"        | 一个对象循环 |
|    v-for="(value, key) in object"     |   两个参数   |
| v-for="(value, key, index) in object" |   三个参数   |

###### 过滤结果

```html
<li v-for="n in evenNumbers">{{ n }}</li>

<script>
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
</script>
```

通过计算属性来实现数据的过滤，通过函数的回传是更好的方式来处理数据，而不再是通过if的判断。

###### v-on:click 事件修饰符

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

>  使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

###### 表单输入绑定

| v-model="常用名称" |   type   |     data     |      类型       |
| :----------------: | :------: | :----------: | :-------------: |
|      message       |   null   |    String    | 文本 & 多行文本 |
|      checked       | checkbox |   Boolean    |   复选框 对错   |
|      checked       | checkbox |    Array     |     复选框      |
|       picked       |  radio   |    String    |     单选框      |
|      selected      |   null   | String/Array |    单选/多选    |

1. `v-model `与 `v-bind` 结合起来用，通过绑定数据来获取对于的输入值
2. `v-model ` 与`v-for`结合使用，实现复选和多选。
3. 使用`v-model.number`可以将输入值转为数值类型
4. 使用`v-model.trim`可以过滤掉输入的首尾空白字符