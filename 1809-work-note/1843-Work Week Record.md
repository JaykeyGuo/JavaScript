# 1843-Work Week Record

### 181022

*Tasks*

- [x] 修改敦沛页面组件，实现不同的样式更改
- [x] 修改文传用户中心的入金方式，添加一个扫码支付的方式
- [x] 完成敦沛的交易中心页面
- [x] 添加敦沛的软件下载页面

定义不同的CSS的方式，通过父组件传值来实现，子组件接受一个参数，来显示不同的组件的样式。

### 181023

*Tasks*

- [x] 完成敦沛的下载页面
- [x] 完成interactive页面的组件
- [x] 完成互动专区的疑难解答页面
- [x] 完成文传产品细则页面的表格添加（Excel 转 HTML）

[Array-30s](https://30secondsofcode.org/index)

两个方法，在遍历数组的时候，可以使用`arr.evrey(fn)`来实现遍历的效果，并在其中传入对应的函数

##### 数学“任给”

```js
const all = (arr, fn = Boolean) => arr.every(fn)
const allEqual = arr => arr.every(val => val === arr[0])
```

这两个方法都是通过对于的数组的遍历来判断是不是每个值到符合要求。可以将这个函数使用在对于的数据的判断上，这样更加的便利。

##### 数学“存在”

```js
const any = (arr, fn = Boolean) => arr.some(fn)
```

使用了`arr.some(fn)`的方法来找存在的一个数。

> 自己的感触是，在看这些代码的时候，需要对js的基础知识有充分的了解，这样才能事倍功半。但是，也不要本末倒置，通过对于的不同的函数的了解来实现对应的功能，这样才能在实践中找到对应的方法，**把知识用起来。**

### 181024

- [x] 修改敦沛官网的首页路由
- [x] 修改敦沛页面的下载路径
- [x] 敦沛header的下拉菜单组件

[YDNJS-第三章：函数与块儿作用域](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/scope%20%26%20closures/ch3.md)

> 块儿作用域指的是这样一种想法：变量和函数可以属于任意代码块儿（一般来说，就是任意的 `{ .. }`），而不是仅属于外围的函数。

通过函数的定义方式来解释不通的作用域的使用方式，在函数的作用域中，需要注意的是变量要保持在块儿作用域内，这样才能保证一个函数的纯净性，也不会使得不通的函数的变量出现混用的情况。

文中也提到`let, const`在一定程度上提高了js的作用域的封闭性，使得代码之间的数据不会流串。

[YDNJS-第四章：提升](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/scope%20%26%20closures/ch4.md)

函数的声明会提升，但是函数表达式的声明不会提升。

> **函数**会首先被提升，然后才是*变量*。

提升的过程是编译器处理的，在这个过程中需要注意对应的需求的处理。三点需要注意：

1. 不要重复声明：`var a; a = 23`
2. 函数的提升，比变量的提升有更高的优先级
3. 函数表达式的声明不会提升

[回顾第二章](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/scope%20%26%20closures/ch2.md)

![](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/scope%20&%20closures/fig2.png?raw=true)

[第五章：作用域闭包](https://github.com/getify/You-Dont-Know-JS/blob/1ed-zh-CN/scope%20%26%20closures/ch5.md)

*作者对电影的痴迷也是有的，居然在书里出现了星战和黑客帝国的段子。*

> 暴力解释：**闭包就是函数能够记住并访问它的词法作用域，即使当这个函数在它的词法作用域之外执行时。**
>
> ***Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.***

```js
function foo() {
	var a = 2;
	function bar() {
		console.log( a );
	}
	return bar;
}
var baz = foo();
baz(); // 2 -- 哇噢，看到闭包了，伙计。
```

我的理解：在baz()执行的时候，看似foo()已经作为垃圾回收了，但是其实因为baz调用了bar的方法，所以这个时候其实在上图中的气泡2还是存在的，这个时候整个气泡2可以叫做一个闭包。

```js
var fn;
function foo() {
	var a = 2;
	function baz() {
		console.log( a );
	}
	fn = baz; // 将`baz`赋值给一个全局变量
}
function bar() {
	fn(); // 看妈妈，我看到闭包了！
}
foo();++
bar(); // 2
```

即使是在外部的函数启用一个函数内部的另一个函数，这个时候对于的baz的闭包也会启动，保持对应的输出结果。

*观察闭包*

在一个对应的词法作用域之下的代码，其实就是一个闭包，这个闭包的存在，会实现一些功能，或者是通过对应的方式来解决一些问题，关键的是如何在这个过程中发现闭包，闭包是无处不在的，在一定的词法作用域的范围里，其实就能是一个闭包了。

*代码的优化  从`var`到`let`*

```js
for (var i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}

for (let i=1; i<=5; i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}
```

文中使用IIFE的方式来改进第一段代码，之后不断的体现出作用域不同造成的一些问题，最终通过一个中间变量来实现了每次打印时不会指向同一个`i`值。

PS：timer()在浏览器和Node中的使用是不同的。在浏览器中会出现一个对应的ID值。

通过`let`的块儿作用域和闭包的思路就能解决一秒打印一次的问题。

***模块***

> 行使模块模式有两个“必要条件”：
>
> 1. 必须有一个外部的外围函数，而且它必须至少被调用一次（每次创建一个新的模块实例）。
> 2. 这个包装函数的返回值必须包含至少一个内部函数的引用，这个函数才拥有包装函数内部作用域的闭包。

模块的使用也是很普遍的，能够得到ES6的更多的支持，其次就是懂得在模块中的不同作用域的理解。

[模块示例代码](https://gist.github.com/JaykeyGuo/2a962d85a588006077333284bb5049c9)

*附录部分*

> 关键的差异：**词法作用域是编写时的，而动态作用域（和 this）是运行时的**。词法作用域关心的是 *函数在何处被声明*，但是动态作用域关心的是函数 *从何处* 被调用。

### 181025

*Tasks*

- [x] 完成文传的产品页面的表格的英文版
- [x] 完成敦沛翻译的项目结构的更改
- [x] 修改文传info页面的接口，和分页设置--使用路由守护来实现接口的更新
- [ ] 文传用户中心的弹窗样式问题--海雄，使用inline-block来解决

##### Vue如何更改路由

路由的改变有两种模式，Hash模式和History模式，Hash模式对应的是`#`，History模式对于的就是路由的名称的改变。

通过History的模式，使用HTML5 History API来实现URL的跳转。History API最主要的功能就是不重新加载页面。

1. ##### `history.replaceState([data], [title], [url]);`

2. ##### `history.pushState([data], [title], [url]);`

```shell
history.replaceState(null, null, 'hello');
// 通过replace的方式，只能实现浏览区的URL的更换，不会发出request来更新和重新加载页面
history.pushState(null, null, 'hello');
// 通过pushState的方式，可以改变URL的同时，并且改变浏览器的history
// 但是其中的问题是，第三个参数，只能是同源的地址，如果是不同源的，会出现报错。
```

查看Vue-Router的源码之后，在文件中发现URL的改变和页面的加载就是通过这两个HTML5 History API来实现的。

---

参考文章：

- [vue-router实现单页面路由原理](https://zhang122622623.github.io/2018/03/14/vue-router%E5%AE%9E%E7%8E%B0%E5%8D%95%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1%E5%8E%9F%E7%90%86/)
- [Manipulating the browser history](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [使用HTML5的History API](https://www.cnblogs.com/chaoyuehedy/p/5758143.html)

### 181026

- [ ] 敦沛官网
  - [x] 首页下载部分
  - [x] about页面的二级路由
  - [x] trade页面的二级路由
  - [x] 平台下载页面

#### Flex 布局

[Flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

*使用flex*

```css
.box {
    display: flex | inline-flex | -webkit-flex
}
```

设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

*基本概念*

Flex container => Flex item

Flex 容器 与 Flex 项目

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

水平轴（main axis）和垂直轴（cross axis），水平轴开始的点（main start）和水平轴结束点（main end），垂直轴开始点（cross start）和结束点（cross end）

*容器的属性*

```css
.flex-container {
    flex-direction: row* | row-reverse | column | column-reverse
        	水平主轴，左起 | 水平右起 | 垂直方向，上起 | 垂直下起
    flex-wrap: nowrap* | wrap | wrap-reverse;
    		不换行 | 换行，第一行在上 | 换行，第一行在下
    flex-flow: <flex-direction> || <flex-wrap>;
    		是前两个属性的简写
    justify-content: flex-start* | flex-end | center | space-between | space-around;
    	左对齐 | 右对齐 | 居中 | 两端对齐，间隔相等 | 每个项目居中，间隔相等
    align-items: flex-start | flex-end | center | baseline | stretch*;
    	交叉轴起点 | 交叉轴终点 | 交叉轴中点 | item的第一行文字 | 占满高度
    align-content: flex-start | flex-end | center | space-between | space-around | stretch*;
    	交叉轴起点 | 交叉轴终点 | 交叉轴中点 | 交叉轴两端对齐 | 每根轴线两侧的间隔都相等 | 轴线占满整个交叉轴
}
```

*项目属性*

```CSS
.flex-item {
    order: <integer>; /* default 0 */	排列顺序
    flex-grow: <number>; /* default 0 */	放大比例
    flex-shrink: <number>; /* default 1 */	缩小比例
    flex-basis: <length> | auto; /* default auto */	项目占据的主轴空间（main size）
    flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

[Flex实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

---

### 一周任务汇总

##### 181022

- [x] 修改敦沛页面组件，实现不同的样式更改
- [x] 修改文传用户中心的入金方式，添加一个扫码支付的方式
- [x] 完成敦沛的交易中心页面
- [x] 添加敦沛的软件下载页面

##### 181023

- [x] 完成敦沛的下载页面
- [x] 完成interactive页面的组件
- [x] 完成互动专区的疑难解答页面
- [x] 完成文传产品细则页面的表格添加（Excel 转 HTML）

#####  181024

- [x] 修改敦沛官网的首页路由
- [x] 修改敦沛页面的下载路径
- [x] 敦沛header的下拉菜单组件

##### 181025

- [x] 完成文传的产品页面的表格的英文版
- [x] 完成敦沛翻译的项目结构的更改
- [x] 修改文传info页面的接口，和分页设置--使用路由守护来实现接口的更新
- [ ] 文传用户中心的弹窗样式问题--海雄，使用inline-block来解决

##### 181026

- [x] 敦沛官网

  - [x] 首页下载部分
  - [x] about页面的二级路由
  - [x] trade页面的二级路由
  - [x] 平台下载页面

页面修改，主要在敦沛；接口，一个扫码支付，一个新闻列表的对接。