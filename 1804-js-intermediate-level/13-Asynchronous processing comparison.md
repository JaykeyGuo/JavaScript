# 13-异步处理对比-有对比才更清楚技术演进的目的

还是王霞同学，昨天来我座位上问我用pomise处理异步的技巧问题。她跟我说了一大堆话，说实话我没怎么听懂她想表达什么意思，但我大概判断出她的问题出在哪。

考虑到她刚学编程不久，单单说太多的技巧她也记不住，我当时就把她叫到自己电脑前看我怎么对异步处理进行优化演进。后来她说懂了，我也不知道她是真懂了还是假懂了，但整个演进过程是值得一直思考，即使没懂，多推敲几次就一定会懂。

我把整个过程整理出来，供大家推演。

我设计了两个模拟的异步函数

```js
function getName(callback) {
  setTimeout(function () {
    callback('wang xia');
  }, 100);
}

function getBirthday(name, callback) {
  setTimeout(function () {
    if (name && name.includes('wang xia')) {
      callback(name + ' . 芳龄18')
    } else {
      callback('鬼知道是谁');
    }
    }, 100);
}
```

当想获得到某人的年龄信息时，应该按照以下方式来调用。

```js
    getName(function (name) {
      getBirthday(name, function (message) {
        console.log(message);
      });
    });
```

以上都是标准做法，但在调用getName和getBorthday是嵌套的调用。什么嵌套？嵌套就是一个函数的调用被强制在某个函数的内部执行，嵌套都是业务带来的。getName是通过callback返回name，而条用getBirthday之前，我们必须先拿到name，因此业务上就把调用getBirthday的时机点放在getName的回调函数处。

两次嵌套从理解上还算能理解，但嵌套层次多了就很难理解了。看以下伪代码。

```js
    fun1(function () {
      fun2(function () {
        fun3(function () {
          fun4(function() {
            ....
          });
        });
      });
    });
```

深层次嵌套在业务中是存在的，这势必导致业务的复杂度。

用promise来改进。

```js
    function getName() {
      return new Promise(function (resolve){
        setTimeout(function () {
          resolve('wang xia');
        }, 100);    
      });
    }

    function getBirthday(name) {
      return new Promise(function (resolve, reject){
        setTimeout(function () {
          if (name && name.includes('wang xia')) {
            resolve(name + ' . 芳龄18')
          } else {
            reject('鬼知道是谁');
          }
        }, 100)
      });
    }

    getName().then(function(name) {
      getBirthday(name).then(function (message) {
        console.log(message);
      });
    })
```

promise能很好的屏蔽回调的问题，getName和getBorthday两个异步函数都去掉了callback，换来的代价就是两个函数都被封装在new Promise内部，用resolve和reject来处理回调。

这个代价值得吗？当然值。

- 调用者更简单了，不需要显性的设置一个callback函数。
- 被调用者也更清晰了，根本就不管别人是否设置callback。

这是一种调用者和被调用者相互解耦的做法，两者之间的唯一联系就是promise对象。调用者很清楚一点，调用getName函数后，一定会返回promise对象。只要用then来处理结果即可。

```js
    getName().then(function(name) {
      // do something.
    });
```

但是，这视乎并没有解决调用者的嵌套问题，调用者还是要依赖一个异步的结果取调用另一个异步函数。

```js
    getName().then(function(name) {
      getBorthday(name).then(function (message) {
        console.log(message);
      });
    });
```

是的，**promise解决不了嵌套问题**。

再改进代码

```js
    function getName() {
      return new Promise(function (resolve){
        setTimeout(function () {
          resolve('wang xia');
        }, 100);    
      });
    }

    async function getBirthday(name) {
      return new Promise(function (resolve, reject){
        setTimeout(function () {
          if (name && name.includes('wang xia')) {
            resolve(name + ' . 芳龄18')
          } else {
            reject('鬼知道是谁');
          }
        }, 100)
      });
    }

    async function output() {
      var name = await getName();
      var message = await getBirthday(name);
      console.log(message);
    }

    output();
```

在调用promise异步函数的地方，封装了一个async output函数。在调用异步函数的前面加上了await。完美解决了嵌套问题，整个代码像是同步执行一样。至于什么是async和await，这个需要自己去摸索。

此时，脑子里要建立出两个清晰的认识。

1. 异步函数用promise封装处理，可以和调用者保持良好的关联关系，而不用采用显性的callback。即：promise解决异步回调问题。
2. 用async和await可以像同步一样处理用promise封装的异步函数。

完善流程

```js
    async function output() {
      try {
        var name = await getName();
        var message = await getBirthday(name);
        console.log(message);
      } catch (err) {
        console.log(err);
      }
    }
```

await getName()会把resolve返回值给到name，但如果getName内部异常了并采用reject返回值时，name是拿不到值的，这时就要用try-catch来保证异常处理（把reject返回结果这个流程称为异常没毛病）。

话题讲到这，还不能结束，要成为优秀工程师就要再深入一点。

```js
    async function output() {
      try {
        var name = await getName();
        var message = await getBirthday(name);
        console.log(message);
      } catch (err) {
        console.log(err);
      }
    }
```

在以上output代码中，then()还能干点啥？

------

~~由于`async`返回的是一个Promise，所以可以通过`then()`来拿到其中的name和message的数据。~~

理解错了题目的意思，通过`then()`还能够进行一些错误的处理，和让代码更丰富（见下）。

------

#### 徐帅时间

getName()会返回一个primise对象。 如果加上await就可以像同步一样活得getName()内部通过resolve返回的结果。

```js
var name = await getName();
```

在把结果给到name变量之前，其实还可以继续对getName()的promise对象返回的resolve内容进行深度处理。

比如：判断name是不是字符串，如果不是就抛出异常。

```js
async function output() {
  try {
    var name = await getName()
    .then(function (name) {
      if (typeof name !== 'string') {
        throw new Error('not string');
      } else {
        return name;
      }
    });

    var message = await getBirthday(name);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
```

比如：深度处理数据，给名字后面加一个称呼。

```js
async function output() {
  try {
    var name = await getName()
    .then(function (name) {
      return name + ' 同学, '
    });

    var message = await getBirthday(name);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
```

比如：把以上的处理结合。

```js
async function output() {
  try {
    var name = await getName()
      .then(function (name) {
        if (typeof name !== 'string') {
          throw new Error('not string');
        } else {
          return name;
        }
      })  
      .then(function (name) {
        return name + ' 同学, '
      });

    var message = await getBirthday(name);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
```

在then函数内return一个值，这个值会被会被间接传给下一个then，值得没有then后，再给await前面的变量。

------

参考资料：

[async 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/async.html)

 