# 10-初始Promise

 `Promise`是一个类，在这个类里有对应的变量，关键的是会生成一个新的`Promise`类。

```js
class Container {
    constructor(val) {
        this.val = val;
    }
    
    map (fun) {
        return new Container(fun(this.val))
    }
}

var obj = new Container(1);

function addOne(val) {
    return val + 1;
}

var obj2 = obj.map(addOne);

console.log(obj2.val);	// => 2
```

一个Container会生成一个新的Container，同时其中会需要一个function。

这是对应的一个类，生成新的一个类的方式。记住只有在调用的时候新的Container才会产生。

```js
// filepath: ./fs-extra.js

var fs = require('fs');
function readFile(callback) {
    fs.readFile('./package.json', 'utf-8',
       function(err, content) {
        if(err) {
            callback(err);
            return;
        }
        
        callback(null, content);
    });
}
```

```js
//filepaht: ./app.js

var express = require('express');
var app = express();
var fs = require('./fs-extra');

fs.readFile(function(err, content) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(content);
});
```

两端代码完成了一个简单的异步调用，用fs来读取文件信息。其中一定会出现的是`callback`函数，通过callback函数来返回对应的结果。这也是Promise要解决的痛点，callback函数，再次都需要对err作出处理，在处理err之后才能做其他的操作，虽然已经是编程的“规定俗成”，但是还是会带来很多的麻烦。

Promise替代了callback，使用两个简单的反馈来给出对应的响应。

```js
// filepath: ./fs-extra.js

var fs = require('fs');

function readFilePromise() {
    new Promise(function(resolve, reject) {
        fs.readFile('./package.json', 'utf-8',
           function(err, content) {
            if(err) {
                reject(err);
                return;
            }
            resolve(null, content);
        });
    });
}
```

```js
//filepaht: ./app.js

var express = require('express');
var app = express();
var fs = require('./fs-extra');

fs.readFilePromise()
    .then(function(resule) {
   		console.log(result);
	})
	...	//此处可以加上无限多then
    .catch(function(err) {
    	console.log(err);
	})
});
```

##### 链式代码——流水线代码

Promise的实现方式就是通过then来实现对应的代码关联，将“结果”和“错误”做更简单的处理，使得绕过相对复杂的callback函数。

其实很早就看过类似的代码，在WebApp里vue中调用axios的部分：

```js
axios.get('/api/v1/posts')
    .then(function (response) {
    return response.data;
})
    .then(function(data){
    vm.postsList = data.postsList;
})
    .catch(function(err){
    alert(err.response.data.error);
})
```

axios中就使用了Promise的技术，因为每一个`.then`之后会产生一个新的Promise，所以对应的操作之间是相互独立的，每一步都是基于前一步的返回值。这不就是Currying的原则吗？每一步只处理一部分的参数，剩余的参数交给下面的函数。

##### 已知概念类比

```js
var express = require('express');
var app = express();

app.use();
app.use();
app.use();
...
..
.
// 兜底处理
app.use(function(err){
    ...
});
```

在express中对应的`app.use`的处理也是链式的，每个中间件相互独立，互不影响，同时又能持续下去。