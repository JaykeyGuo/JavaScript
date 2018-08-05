# 03-计算属性

### 计算属性

通过函数来返回一个值，可以减免在HTMl中的复杂的函数链式计算。

> 再简单的例子，也要运行试试。

1. 如果计算属性的返回值是“常量”，则没有必要使用计算属性。
2. 如果不是对`data`中的数据进行处理，就是“刷流氓”。
3. 如果计算属性不是一个**纯函数**，就是在“刷流氓”。

#### 计算属性 VS 方法

```js
//这是一个方法，使用一次就调用一次
methods: {
    reversedMessage: function () {
        return this.message.split('').reverse().join('')
    }
}
```

```js
//这是一个计算属性
computed: {
    //如果使用同一个数据来计算，会对同一个结果进行缓存
    reversedMessage: function () {
        return this.message.split('').reverse().join('')
    }
}
```

计算属性的优势在于可以对同一个计算结果进行缓存，每一步都会有缓存。

方法的优势在于调用一次使用一次，不会出现缓存。

#### 计算属性 VS 侦听实行

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  watch: {
    fullName: function (newValue, oldValue) {
    	console.log(newValue + "," + oldValue);
  	}
})

//单独调用watch
app.$watch('firstName', function(newValue, oldValue) {
    console.log(newValue + "," + oldValue);
})
```

#### 计算属性的 setter

###### JS **getter 函数** &  **setter 函数**

计算属性默认只有 `getter` ，不过在需要时你也可以提供一个 setter：

只有`setter`的情况下，没有`getter` 不能拿到对应的数据，也不能通过Console来调用	`setter`。

> `setter` 必须伴随 `getter` 一起使用。

```js
var obj = {
    my_name: 'xugaoyang',
    
    get name() {
        console.log('get');
        console.log(this.my_name);
        return this.my_name;
    }，
    set name(val) {
    console.log('set');
    console.log(val);
    this.my_name = val;
}
}

obj.name; 
// =>
//get
//xugaoyang
//set
//xiaoming

```

getter和setter的属性，其实和Jave中的访问器和修改器相似。

#### 侦听器

文档中的例子是`watch`的使用场景，通过监听输入的值，来做出实时的反馈。

### Class 与 Style 绑带

#### Vue + Bootstrap 例子

```html
<div id="app" class="container">
    <div id="watch-example">
        <div class="btn-group">
            <button class="btn btn-info"
                v-bind:class="item.active ? 'active' : ''"
                v-for="item in items">
                {{ item.value }}
            </button>
        </div>
    </div>
</div>
```

```js
var app = new Vue({
        el: "#app",
        data: {
            items: [
                { value: 'button1', active: true },
                { value: 'button2', active: false },
                { value: 'button3', active: false },
            ]
        },
})
```

#### v-bind:class



------

> 单页面其实就是一个app。

1. vuex与redux：一种路由处理的模式