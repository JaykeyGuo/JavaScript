# 12-JS进阶-迭代

[24种设计模式](https://www.jianshu.com/p/4a5a0a92e7d5)

### 代码迭代

##### Version-0

```js
var fs = require('fs'); 
var dirPathString = './'; 
var outputPathString = './Jaykey.txt'; 
function callback(err, files) {
    if (err) {
        console.log('读取文件失败');
        return;
    }
    for (var i = 0; i < files.length; i++) 
        var names = [];
        if (files[i].endsWith('.json')) {
            names.push(files[i]);
        }
}
function callback2(err) {
    if (err) {
        console.log('写入文件失败');
    } else {
        console.log('写入文件成功');
    }
}
fs.readdir(dirPathString, callback);
fs.writeFile(outputPathString, names, callback2);
```

> 没有注释，但是能让别人看懂。

##### Version-1

使用Promise改写，使用map的方式来取代for循环，`R.fliter`来筛选对应的文件。

- 查找文档(node promise)

```js
var util = require('util');
var fs = require('fs'); 
var R = require('ramda');
var dirPathString = './'; 
var outputPathString = './readJSON.txt'; 

const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);

readdir(dirPathString)
    .then(files => {
        var names = files.map((item) => {
            if (item.endsWith('.json')){
                return item;
            }
        });
        
        names = R.filter(R.compose(R.not, R.isNil), names);
        return names;
    })
    .then(names => {
        return writeFile(outputPathString, names)
    })
    .catch(console.log)

```

##### Version-2

使用Ramda将对应的

```js
var R = require('ramda');
var util = require('util');
var fs = require('fs'); 
var dirPathString = './'; 
var outputPathString = './readJSON.txt'; 

const readdir = util.promisify(fs.readdir);
const writeFile = util.promisify(fs.writeFile);
const filerJson = R.compose(R.filter(R.compose(R.not, R.isNil)), R.filter(R.test(/.json/)));

readdir(dirPathString)
    .then(filerJson)
    .then(names => {
        return writeFile(outputPathString, names)
    })
    .catch(console.log)

```

##### Version-3

```js
var R = require('ramda');
var util = require('util');
var fs = require('fs');
var dirPathString = './';
var outputPathString = './readJSON.txt';

const readdir = util.promisify(fs.readdir);

function writeFile(path) {
    return function (content) {
        return util.promisify(fs.writeFile)(path, content)
    }
}

const filerJson = R.compose(
    R.filter(R.compose(R.not, R.isNil)),
    R.filter(R.test(/.json/))
);

readdir(dirPathString)
    .then(filerJson)
    .then(writeFile(outputPathString))
    .catch(console.log)

```



##### Version-4

```js
var R = require('ramda');
var util = require('util');
require('util.promisify').shim();
var fs = require('fs');
var dirPathString = './';
var outputPathString = './readJSON.txt';

const readdir = util.promisify(fs.readdir);

function writeFile(path) {
    return function (content) {
        return util.promisify(fs.writeFile)(path, content)
    }
}

readdir(dirPathString)
    .then(R.filter(R.compose(R.not, R.isNil)))
    .then(R.filter(R.test(/.json/)))
    .then(writeFile(outputPathString))
    .catch(console.log)

```

### Node.js 探秘

[初识单线程的 Node.js](http://taobaofed.org/blog/2015/10/29/deep-into-node-1/)

单线程的Node.js如何处理多线程的并发。

### 微信小程序初探

> 第一印象：小程序就是Vue的改版。

[微信小程序API](https://developers.weixin.qq.com/miniprogram/dev/api/) 这是官方的API

也可以通过wepy的方式来调用第三方库来操作，但是对应硬件和系统的操作仍旧需要微信原生的API。

### 函数式编程的**日常**

> 面向过程编程，对于一类问题能够重复使用。

编程的关键在于解决重复性操作，今天写了一个读list再筛选的函数，之后再遇到类似的问题，就可以使用对应的函数。

提高代码的“复用率”是关键所在，每一次使用的时候进行迭代，更新代码和方法。

