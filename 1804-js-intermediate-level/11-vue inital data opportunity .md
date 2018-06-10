# 11-如何改进vue的初始化数据调用时机

[【10.11练习】](http://xugaoyang.com/post/59ddbf98da515e18113d3c04)

以下是一个实际的案例。

```html
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      postsList: []
    },
    methods: {
      fetchData () {
        axios.get('/api/posts')
          .then(function(response) {
            vm.postsList = response.data.postsList;
            vm.postsList.forEach((element) => element.url = '/posts/show?id=' + element._id);
          })
      }
    },
  });

  vm.fetchData();
</script>
```

先初始化vm，然后调用vm的fetchData()函数来获取数据，一切看上去很完美。 但是，我觉得存在一些调用时机不清晰的问题。

如何能保证在html构建完了后才去获取数据呢？

---

使用setTimeout，等待页面渲染之后，再去获取数据。

```html
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      postsList: []
    },
    methods: {
      fetchData () {
          setTimeout({
              axios.get('/api/posts')
          .then(function(response) {
            vm.postsList = response.data.postsList;
            vm.postsList.forEach((element) => element.url = '/posts/show?id=' + element._id);
          })
          }
          ,0)
      }
    },
  });

  vm.fetchData();
</script>
```

------

#### 徐帅的回复：上面的例子事实上是能保证fetchData的callback回来后，vue已经虚拟化完了。

用这个例子我想提醒一点：假如我们的代码在vue结构外面，很难保证整个业务逻辑的正确性。 几个问题：

- 在vue进行虚拟化html之前，我能不能发起一个请求？
- 在vue没有虚拟化html之前，我能不能改变data数据从而更新html内容？
- vue从初始化开始有一个生命周期，如果代码能完全按照生命周期的流程去写，一切将会变得可控。

[vue生命周期说明](https://cn.vuejs.org/v2/guide/instance.html)

![img](https://cn.vuejs.org/images/lifecycle.png)

针对vue的生命周期，把代码进行改进。

```html
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      postsList: []
    },
    mounted: function() {
        axios.get('/api/posts')
          .then(function(response) {
            vm.postsList = response.data.postsList;
            vm.postsList.forEach((element) => element.url = '/posts/show?id=' + element._id);
          })
    }
  });
</script>
```

上面把抓取数据的时机放在vue生命周期的mounted回调函数内，当mounted被回调，说明vue虚拟化（初始化）已经结束。