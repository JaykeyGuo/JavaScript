# Javascript 学习笔记

### 基础-第一课

###### JS运行环境：

1. 浏览器
2. Nodejs

都含有V8引擎（对代码进行预处理）和内置服务（不同环境有不同）。

核心是**“内置库”**，如何调用会输出什么结果。

###### Javascript是解释性语言

一边编译，一边执行。**开发效率高**，运行效率低

![浏览器的运行环境](https://ws2.sinaimg.cn/large/006tNc79ly1fpc6fwed7cj30zk0k0grd.jpg)

![Node的运行环境](https://ws1.sinaimg.cn/large/006tNc79ly1fpc6gomz69j30zk0k0q7r.jpg)

###### 用自己的话解释概念：

> 运行环境：代码的运行环境，分为浏览器和Nodejs两种
>
> V8引擎：运行代码的黑箱，目前只需要知道输入什么能输出什么
>
> 解释器：对代码的解释，让机器能够读懂js代码
>
> 内置库：js内置的代码库，js的基础和共同点
>
> 第三方库：个人或者公司开发的使用js的方法

##### 目前的学习目标：掌握编程语言

![最初的学习目标](https://ws2.sinaimg.cn/large/006tNc79gy1fpc6vnpl02j30zk0k00xy.jpg)

---

小结：

1. JS的运行环境是很灵活的，能直接在浏览器中运行。
2. 一大特点：**边编译，边执行**，使得js的运行效率高，但是运行速度慢。
3. 需要知道不同的运行环境会调用不同的库，但是共同点是**JS内置对象**
4. 目前的学习目标：掌握JS编程语言



### 基础-第二课

##### 命名

一个名字背后包含很多的属性，有不同的描述，对应的数据表的标题和内容。

JS中采用的是山顶式的命名方法：

```Javascript 
var userName = "liming";
var isAdmin = true;
console.log(userName);

/*一个很长的名字*/
var myJavaScriptUserName = {
  student: name,
  title: "xxxx",
};
```

需要注意的是，每一个JavaScript命令结束的时候使用**"*;*"**

在每一个属性之后使用的是**","**来分割不同的属性。

###### 程序：处理数据的工具，最终得到的对应的结果。

个人JS学习记录网页：https://jaygjianguo.github.io/js-study-record/

---

小结：

JS的命令格式有自己的特点，需要注意的是结束用分号，一个变量之中的不同属性用逗号，在Node的环境下运行的结果就是对应输出数据。

在变量的添加中，可以直接在原有变量的基础上进行添加，但是必须赋予对应的值，如果只是添加了变量的类型，没有赋予对应值，会出现报错。

JS中的循环与Java类似，都是三个部分完成，*变量；循环长度，递推方式。*

### 基础-第三课

![JavaScript-Lesson-3-0002](../../Pictures/3.Screenshots/JavaScript-Lesson-3-0002.png)

驼峰式命名法：

命名的时候要突出**是什么，**能够从名称知道对应是什么东西，有什么作用，在命名的时候也要知道，不是用HOW命名，HOW的描述更多是对应的方法，例如：

```javascript
document.getElementById("demo");
```

#### 一个案例：

```javascript
for (
  var i = 0, j = myLikeColorsList.length - 1;
  i < myLikeColorsList.length / 2;
  i++, j--
) {
if (i!=j){
  console.log(myLikeColorsList[i]);
  console.log(myLikeColorsList[j]);
}else{
  console.log(myLikeColorsList[i]);
}
}
```

两倍速遍历数据的方法，同时从两头开始查找。

//从两头开始烧绳子，节省一半的时间和调用次数。

#### 作业：

![](https://ws1.sinaimg.cn/large/006tNc79gy1fph0nvpfe6j30zk0k0dln.jpg)

我的作业：

![](https://ws3.sinaimg.cn/large/006tNc79ly1fph5qgx1g5j30qi0eftci.jpg)

---

小结：

1. 命名是一件重要的事情，是代码中团队协作的重要部分，不仅要自己看得懂，也要让任何一个懂代码的人看得懂，这样才能提高自己的输出效率和团队的合作效率。
2. 循环的使用，三个部分要齐全，一个是循环的指标（index），一个是循环的条件，最后是循环后对指标的操作。

---

### 基础-第四课

记住什么？

#### 函数的构造和调用

> 原则：没有调用的参数和函数，都是流氓参数、流氓函数。

#### 从实际应用到代码

第一步是拆分过程，讲一个“大事件”拆分成若干的小事情，只找其中必要的部分来做。

第二步，完成各个小的单元，写出各个小部分的代码。

第三步，汇总，形成工作流，排序，调用对应函数。

PS：做好每个小单元的设计和封装，才能在调用的时候更加方便和高效。好的函数是能够多次调用的。

#### 使用VUE来构建动态数据

---

小结：使用VUE的过程中要赋予对应的id值。

更新个人JS学习博客：https://github.com/JayGJianGuo/js-study-record

---

### 基础-第五课

画顺序图，看到顺序图就能翻译出对应的代码。

![](https://ws1.sinaimg.cn/large/006tNc79gy1fpqbbsuh75j30zk0k041a.jpg)

分步骤来拉取数据。

---

![](https://ws4.sinaimg.cn/large/006tNc79gy1fpqbcznltbj30zk0k0428.jpg)

##### 前端的工作，三者之间的关系：

> 1. 用户与HTML的交互
> 2. HTML与JS代码的交互
> 3. JS代码与服务器的交互（数据交互）

##### 函数的调用

输入什么，输出什么，不同函数实现不同的输出。对外界**参数**进行处理。

##### 切分流程，最小的可用单元

用不同的函数来完成最小的工作，组合不同的函数来完成一个较大的任务。小套路的叠加，变成一个大套路。

![](https://ws4.sinaimg.cn/large/006tNc79ly1fpqbi8hqhlj30zk0k041n.jpg)

#### 立刻返回

```javascript
function checkFlightSchedule() {
  console.log('开始查航班信息');

  // 模拟构建航班的时间信息
  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'hangzhou'
  };

  return scheduleInfo.start;
}

//---------------------------------------

// 调用立即函数checkFlightSchedule
var startTime = checkFlightSchedule();
console.log(startTime);
```

##### 回调（间接返回）

```Javascript
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  // 模拟构建航班的时间信息
  var scheduleInfo = {
    start: '8/23 8:00',
    end: '8/23 10:30',
    from: 'beijing',
    to: 'hangzhou'
  };

  callback(scheduleInfo.start);
}

//---------------------------------------
function callback(startTime) {
  console.log(startTime);
}

// 调用函数checkFlightSchedule，并塞一个回调函数以获取结果
checkFlightSchedule(callback);
```

通过callback作为返回通道来反馈，不是通过一个函数直接反馈，而是通过一个媒介来反馈。

*函数中的参数，和外界的参数没有关系。*

##### 异步（回调的一种方式）

![](https://ws2.sinaimg.cn/large/006tNc79gy1fpqbtvjrm4j30zk0k00ue.jpg)

```Javascript
function checkFlightSchedule(callback) {
  console.log('开始查航班信息');

  setTimeout(function() {
    // 模拟构建航班的时间信息
    var scheduleInfo = {
      start: '8/23 8:00',
      end: '8/23 10:30',
      from: 'beijing',
      to: 'hangzhou'
    };

    callback(scheduleInfo.start);
  }, 5000);
}

//---------------------------------------
function callback(startTime) {
  console.log('通过反馈通道获得了信息');
  console.log(startTime);
}

// 执行查询函数
checkFlightSchedule(callback);
```

对异步调用的个人理解：

```javascript
setTimeout(callback, 5000);
```

![](https://ws3.sinaimg.cn/large/006tNc79gy1fpqc2kpfbsj30ai092t98.jpg)

上图中的代码块中function的部分其实就是对应上面代码中callback的部分。

主函数是checkFlightSchedule(callback)，辅函数是callback(startTime)。主函数中定义了对应的参数，也调用对应的辅函数，而辅函数调用了主函数中定义的参数，来实现需要的完成功能。

两个函数之间是交叉的关系，一步一步执行。

---

搜索了之后发现，js的异步调用是由于js的单线程的性质，在调用不同地方的参数的时候会出现堵车，所以通过对应的时间控制来等待前面的数据传输，之后再执行后面的操作。

一个生活的场景转换成代码之后，中间的差距在于对应的方法和方式不同，也就是要在其中找到机器如何理解这个事情，简单的一句“你等一下，我准备好告诉你”，在js中就是异步调用的方法。

---

### 基础-第六课

```Javascript
//引入FileSystem
var fs = require('fs');
//定义读取路径
var dirPathString = '../../../words-from-the-heart/words';
//定义写出路径
var filePathString = "../write_words_async.txt"
//定义写出回调函数
function callbackForWrite(err) {
  //检查
  if (err) {
    console.log('写文件失败');
  } else {
    console.log('写文件成功');
  }
}
//定义读取路径
function callbackForRead(err, files){
  //检查读取路径
  if (err){
    console.log("读取文件失败");
    return;
  }

  if (files.length > 0) {
    //调用写入
    fs.writeFile(filePathString, files, callbackForWrite);
  } else {
    console.log("没有找到任何文件");
  }
}

fs.readdir(dirPathString, callbackForRead);
```



今早收到的鼓励。

前两天在忙毕业论文的事情，这两天回归学习的主线，目标前端！

先回顾一下之前的内容：

对上述代码调用顺序的整理：

> 1. 引入 fs
> 2. 调用 fs.readdir
> 3. callbackForRead，读取对应的files
> 4. 调用 fs.writeFile
> 5. callbackForWrite

**这个部分还是有不少的疑惑，问题在于对应的fs的引入之后，写入和读取的调用顺序，我的理解是，先读取，后写入。**

---

小结：

做作业的时候，知道读取的函数能够遍历整个目录，于是就将对应的写入的部分放在读取的下级，在每一次读取的时候能够进行写入，引入的fs，不是很懂原理，单从结果来看达到了目的。

***留下的疑问，fs两个函数的嵌套是如何执行的？***

---

### 基础-第七课

课程内容：

vue有什么作用？如何使用vue。

答：vue处理的是前端的数据刷新的问题。

#### 第一个小作业的代码：

```javascript
var fs = require('fs');

var jsonfile = require('jsonfile');
//引入fs & jsonfils

var writeFilePath = './all_words_info.json';

var errorPathString = './error_files_data.json';

var readFilePath = '../../../words-from-the-heart/words/';
//定义路径

fs.readdir(readFilePath, function(err, files){
  if(err){
    console.log("读取文件夹失败");
    return;
  }
  //第一个bug，需要更改对应的字段，将markdown变为json
  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i].includes('.json')) {
      jsonFiles.push(files[i]);
    }
  }

  var jsonList = [];
  var errorFiles = [];
  for (var i = 0; i < jsonFiles.length; i++) {
    try {
      var content = jsonfile.readFileSync(readFilePath + jsonFiles[i]);
      jsonList.push(content);
    } catch (err) {
      errorFiles.push(content);
    }
  }

  jsonfile.writeFileSync(writeFilePath, jsonList, {spaces: 2, EOL: '\r\n'});

  jsonfile.writeFileSync(errorPathString, errorFiles, {spaces: 2, EOL: '\r\n'});


});
```

案例代码中的两个bug的解法：

![](https://ws1.sinaimg.cn/large/006tKfTcly1fpyg924k6vj30ka0gnmz7.jpg)

第二日更新：

第二个bug不是对应的格式的正确，而是写入对应的文件内容

![](https://ws2.sinaimg.cn/large/006tNbRwgy1fpzb18yblaj30na08zmya.jpg)

------

#### 第二个作业：

[心里话汇总网站](https://jaygjianguo.github.io/study-quote/)

[Github代码](https://github.com/JayGJianGuo/study-quote)

###### 遇到的问题：

在提取数据的时候遇到问题，没法通过简单的路径改变读取对应的json文件。最后的解决办法是将数据直接写在html里。

![](https://ws2.sinaimg.cn/large/006tNbRwgy1fpzb0wrk7nj315i12raj3.jpg)

上群问了，需要找到对应的解法，有待研究：

[用vue读取json文件](https://github.com/xugy0926/learn-vue-sample/blob/master/task/index2.html)

---

### 基础-第八课

#### 前端基本架构-Bootstrap

切分（12块）=+划分（布局）=+组件=+自动适配

除了会用bootstrap，也要学会自己用最简单的css来搭建对应的布局，这是基本工

---

### 基础-第九课

#### 函数补课

###### 一个方法：

不知道调用顺序的时候，就把对应的代码删掉，用简单的`console.log("X")`来区分，这样能快速找到对应的代码读取顺序。

###### 代码实例

```javascript
//简单方法

console.log('1');
function checkFlightSchedule() {
  console.log('2');
  return '8:00';
  console.log('3');
}

console.log('4');
checkFlightSchedule();
console.log('5');
```

输出结果：1425

###### 直接调用+嵌套

```javascript
//直接返回

console.log(1);
function checkFlightSchedule(callback) {
  console.log(2);
  callback('8:00');
  console.log(3);
}

console.log(4);
function callback(startTime) {
  console.log(5);
  console.log(startTime);
  console.log(6);
}

console.log(7);
checkFlightSchedule(callback);
console.log(8);
```

输出结果：14725638

###### 同步调用

```javascript
//同步的间接返回

console.log(1);
function checkFlightSchedule(callback) {
  console.log(2);
  callback('8:00');
  return "查完了";
  console.log(3);
}

console.log(4);
function callback(startTime) {
  console.log(5);
  console.log(startTime);
  console.log(6);
}

console.log(7);
var result = checkFlightSchedule(callback);
console.log(result);
console.log(8);
```

输出结果：14725-8:00-6-查完了-8

###### 异步调用

```javascript
//异步

console.log(1);
function checkFlightSchedule(callback) {
  console.log(2);
  setTimeout(function() {
    console.log(3);
    callback('8:00');
  }, 5000);
  console.log(4);
}

//----------------------------------------
console.log(5);
function callback(startTime) {
  console.log(6);
  console.log(startTime);
  console.log(7);
}

console.log(8);
checkFlightSchedule(callback);
console.log(9);
```

输出结果：15824936-8:00-7

---

###### 异步调用需要回头一次，总会比顺序慢一点。

函数的调用中，每执行完一个函数就结束。

---

### 基础-第十课

概念清单：

> 设计模式？
>
> URL
>
> uri = URL + xxx/xxx/xxx，定义的对应资源

---

> callback参数原则：**错误优先、结果第二**

*if err === false // if err == false* 的区别

**代码交互就是挂钩子**

---

http中get与post的区别

get 去取数据

post 给出数据

PS：websorking

使用axios去做get和post的请求



### 第十三课

先思考，再开动。

向好的项目学习，代码和思路，思考方式。

诚实，别装。

更重要的是**“交流与合作”**