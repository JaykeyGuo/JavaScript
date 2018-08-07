# 02-Vue 实例 & 模版语法 & 实战

### Vue 实例

###### **选项对象 options object**是什么？

```vue
data
props
propsData
computed
methods
watch
```

具有很多的属性，是可选的，可以有，可以没有。

###### **指令**——属性操作

```vue
v-text
v-html
v-show
v-if
v-else
v-else-if
v-for
v-on
v-bind
v-model
v-pre
v-cloak
v-once
```

> 使用的是Vue的组件，不再是对应的HTML的原始代码。语义更加清晰。

###### 数据初始化

如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如：

```js
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

###### 使用`Object.freeze()`来冻结数据

```js
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})
```

###### 实例属性与数据的差别

```js
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$data === vm._data	// => true
vm.$el === document.getElementById('example') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
})
```

###### `$watch`监听数据

```js
vm.$watch('a', function (newValue, oldValue) {
  console.log("newData=" + newValue + " oldData=" + oldValue );
})
```

##### **生命周期钩子**的函数

```js
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed
errorCaptured
```

以上是Vue给出的生命周期的函数，会有一个执行的顺序，可以通过log来测试对应的代码顺序。

**这是一个函数很重要！**

> 一个问题：11个钩子函数中，调用到第几个函数的时候，虚拟化就已经完成了？

*A：第四个，mounted。*

### 模版语法

##### v-once

只执行一次，不能修改

```
<span v-once>这个将不会改变: {{ msg }}</span>
```

#####  原始HTML

Vue会将输入的html的代码自动转换为String，所以在需要显示HTMl的时候，需要调用对应的`v-html`属性。

```html
<p>Using mustaches: {{ rawHtml }}</p>	//显示字符串之后的HTML
<p>Using v-html directive: <span v-html="rawHtml"></span></p> //HTML
```

##### 支持JS表达式

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}	//if语句的替代表达式

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

 但是仅限于单个表达式，如果出现多个表达式或者语句则不会生效。

同样的在Vue中，可以在`v-bind`绑定之后使用JS表达式。

```html
<div v-bind:message="'hello'+ message">
    {{ message }}
</div>

<div v-bind:message="functionTest(message)">	//使用函数也是可以的
    {{ message }}
</div>
```

##### 缩写

###### `v-bind` 

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
```

###### `v-on` 

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>
```

### 抽奖页面——实战

[代码实例](https://github.com/xugy0926/learn-vue-sample/tree/master/lucky)

1. 架构页面：使用Bootstrap
2. 添加组件：list
3. 使用Vue添加必要的数据
4. 渐进式加入需要的数据和函数

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
    <title>Document</title>
</head>

<body>
    <div id="app">
        <div class="container">
            <div class="jumbotron">
                <h1 class="display-4">抽奖啦！！！</h1>
                <p class="lead">You are the lucky dog.</p>
                <button class="btn btn-primary btn-lg" v-on:click="lucky">猜猜看</button>
                <button class="btn btn-danger btn-lg" v-on:click="stop">猜中了？</button>
            </div>

            <div class="card" style="width: 100%;">
                    <div class="card-header">
                        <h5 class="card-title">幸运儿</h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <ol v-for="user in luckyUsers">{{ user.name }}</ol>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
</body>
<script>
    var renderUsers = function() {
        let users = [];
        for(let i = 0; i < 100; i++){
            users.push({id: i + 1, name: 'name ' + (i + 1) + "%" });
        }
        
        return users;
    }();
    
    var app = new Vue({
        el: "#app",
        data: {
            users: renderUsers,
            luckyUsers: [],
            isRunning: false,
            luckyNumber: 1,
        },
        methods: {
            lucky () {
                console.log("开始抽奖");
                this.isRunning = true;
                this.run();
            },
            stop(){
                console.log('停止抽奖'); 
                this.luckyUsers.push(this.users[this.luckyNumber]);
                this.isRunning = false;
            },
            run(){
                if( !this.isRunning ) {
                    return;
                }

                this.luckyNumber += 1;

                if(this.luckyNumber >= this.users.length){
                    this.luckyNumber = 1;
                }

                console.log("running...");
                setTimeout(this.run, 1);
            }
        }
    })
</script>

</html>
```

感受到Vue的一个好处，HTML和JS是分离的，HTMl设计好之后，不需要再调整，只需要Focus在JS上就能实现对应的效果，而使用Vue的时候也不需要考虑HTML的情况。

##### 一间部署Docker

```sh
$ docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx

$ docker run --name lucky-dog/*Name*/ -v /some/content[绝对路径]:/usr/share/nginx/html:ro -d [-p 端口] nginx
```

#####  Vue的JS方法

```js
var list = [1,2,3,4];

//常规的js方法
list[4]=5;	//在Vue中错误
list.push(6);	//在Vue中正确
```

原因是Vue重构了JS的一些原生的方法，重新定义，使得Vue的整个生态更加完整。

### 计算属性

###### 基础例子

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
就这个问题有不同的方式，可以直接通过数据的更改来，较好一点的方式是通过`message.split('').reverse().join('')`来实现对应的字符串的反转，但还

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

 通过`computed`来对已有的数据进行操作，对**一个现有数据**做不同的函数操作，不会在生成新的值。

> 原则：不做重复的事情。

------

生命周期函数的部分还需要再理解和应用一下，多看文档，多看文档！