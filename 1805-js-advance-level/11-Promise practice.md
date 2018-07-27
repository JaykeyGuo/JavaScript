# 11-Promise-应用

### Promise的使用场景

对外的异步调用的一切接口，解决递归的问题。

### 常规方式—用request中间件来抓取数据

```js
var express = require('express');
var request = require('request');
var app = express();

function readTopics() {
    request(
    	'https://cnodejs.org/api/vi/topics?page=1&tag=good&limit=1&mdrender=false',
        function (err, response, body) {
            if (err) {
                return;
            }
            
            var list = JSON.parse(body).data; //通过JSON.parse将字符串转换成对象
            readUserInfo(list[0].author.loginname);
        }
    );
}

function readUserInfo(name) {
    request('https://cnodejs.org/api/vi/user/' + name, function (err, response, body){
        var info = JSON.parse(body).data;
        console.log(info);
    });
}

readTopics();

```

常规的方式来抓取数据，其中会有嵌套，嵌套是无法避免的。

### Promise—用axios抓取数据

##### 第一版

```js
function readTopics() {
    axios
      .get('https://cnodejs.org/api/vi/topics?page=1&tag=good&limit=1&mdrender=false')
        .then(response => {
        	//console.log(response);  =>得到转码的Object
        	return response.data.data[0].author.loginname	//name
    	})	//两个data原因是axios内置了一个data，与request中的body一样的效果
        .then(name => {
        	readUserInfo(name);
 	   	})
    	.catch(err => console.log(err))
}

function readUserInfo(name) {
    axios.get('https://cnodyjs.org/api/v1/user' + name)
        .then(response => {
        	console.log(response.data.data);
   		})
    	.catch(err => console.log(err))
}

readTopics();

```

`response.data.data[0].author.loginname`这是一个很深的读取链，如果需要保证健壮性，需要注意判断其中是不是不为`null or undefined`。

##### 第二版

```js
function readData(response) {
    return response.data;
}

function readTopics() {
    axios
      	.get('https://cnodejs.org/api/vi/topics?page=1&tag=good&limit=1&mdrender=false')	//promise
    	.then(readData)	//promise
        .then(result => {
        	return result.data[0].author.loginname	//name
    	})	//promise
        .then(readUserInfo(name))
    	.catch(console.log);
}

function readUserInfo(name) {
    axios
        .get('https://cnodyjs.org/api/v1/user' + name)
    	.then(readData)
        .then(result => {
        	console.log(result.data);
   		})
    	.catch(console.log);
}

readTopics();

```

把axios的data部分抽离出来，在Promise中输入的是一个函数，对应的也会给出一个函数，这样就能保证Promise的链式写法。

当输入的数据与对应的输出的数据并没有差别的时候，Promise的写法会更加的简单，`.catch(console.log);`这样就能把err直接显示，代码更加简洁。

`.then()`的每一步，其实都是一个**比较小的单元**，不是最小的单元，因为太小了，反而很鸡肋，太大了（很长的链）反而失去了函数式编程的原则（纯洁）。

##### 第三版

```js
function readData(response) {
    return response.data;
}

function readFirstName() {
    axios
      	.get('https://cnodejs.org/api/vi/topics?page=1&tag=good&limit=1&mdrender=false')	//promise
    	.then(readData)	//promise
        .then(result => {
        	return result.data[0].author.loginname	//name
    	})	//promise
}

function readUserInfo(name) {
    axios
        .get('https://cnodyjs.org/api/v1/user' + name)
    	.then(readData)
}

//————————————————————————
//将不是Promise的异步改为Promise，直接扔进Promise中

function readFile() {
    return new Promise(function(resolve, reject){
        fs.readFile('path', function(err, content) {
            if (err) {
                return reject();
            } else {
                resolve(content);
            }
        });
    });
}

//----------------------
//语义化
readFile()
    .then(readFirstName)
    .then(readUserInfo)
    .then(console.log);
	.catch(console.log);

```

这个版本才是对Promise的应用，用Promise的逻辑来写代码，其中的逻辑与前两个版本也是不同的。用对应的链式代码来调用，使得代码能够“语义化”，看代码就能知道用啥作用。

#### Express-WebApp中的应用

```js
PostModel.find({}, {})
  .exec() // 必须加上exec()返回的结果才是Promise，可以当成作业研究一下为什么需要它
  .then(post => {
    res.json({ postList: posts });
  })
  .catch(next);

PostModel.save()
  .save()
  .then(() => {
    res.end();
  })
  .catch(next);

```

------

### JS高手必备技能

> 1. **Promise**
> 2. **ramda**

#### Ramda-小试牛刀

```js
var R = requier('ramda');

//currying
function add(x) {
    return function(y) {
        return x + y;
    }
}

//normal style
function(x, y){
    return x + y;
}

// R.curry
var add = R.curry(function(x, y){
    return x + y;
});

var incOne = add(1);
var incTen = add(10);

console.log(incOne(2)); //=> 3
console.log(incTen(2)); //=> 12
```

ramda的代码可以简单的使用，目前的程度把ramda当作对应的“字典”来使用就好。

多层嵌套是很复杂的东西，关键是在于逻辑的严密。没有太多的嵌套是更易懂的代码方式。