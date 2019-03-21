# 1838-Work Record

### 180917

学习Vuex，Vuex是对Vue项目的状态管理，其中的问题是如何更新对应的组件数据。

### 180918

#### 用v-for实现按钮组

完成一个Vue项目index页面的修改，其中的大多部分就是定位到对应的页面，来修改其中的UI，其次就是一个button组的重写，这部分是海雄完成的，对应的重写方式：

```html
<button
	v-for="(item, index) in periodBtns"
    :key="index"
    :class="['order-data-choose-button', {'order-data-choose-active': item.param === periods}]"
    @click="dataChoose(item.param)">
    {{ item.value }}
</button>
```

```js
periodBtns: [
	{ value: '最近一周', param: 0 },
    { value: '最近一月', param: 1 },
    { value: '最近三月', param: 2 },
    { value: '全部', param: -1 }
]
```

通过一个`v-for`循环来实现对于的列表的渲染，v-for在列表中拿到两个值，一个对应的数据，一个是对应的index。并在key中绑定对应的index，class绑定了两个属性，一个属性是常规的，另一个是点击的时候才加上去，关键的点是使用数组和对象来对应的绑定不同的class。

#### 注册页面的数据关系

页面的组件关系

```sh
Login
	RegisterNew
		...
		RegisterId
			RouterLink //=> 返回首页
				STEP13
			RegisterUpload
				Upload
			ElAutocomplete
				ElAutocompleteSuggestions
					ElScrollbar
						Bar
						Bar
					ElInput
			AreaCode
			ElInput
			Elcheckbox
			ProtocolLink
			TheButton
				MbRipple
		RegisterBank
		RegisterSuccess
```

> 查看页面数据如何提交？

没有使用组件的数据，通过v-model来实现数据的绑带，最后传入到一个新的Object中来实现对于的数据的传输，通过qs的中间件来实现对于的URL的数据传输。

图片的上传是之间将图片上传到对应的API上，在返回一个图片的连接来展示的。

### 180919

> 如何维持HTTP登录状态，cookie和session分别是什么？
>
> 如何维持不同设备的登录状态，如何设置过期时间？
>
> 项目中的图片上传的过程，是不是有更好的插件使用呢？

#### 如何维持HTTP登录状态，cookie和session分别是什么？

[一篇文章搞懂COOKIE和SESSION的关系与区别](https://zhuanlan.zhihu.com/p/27736893)

**Cookie**：每次HTTP请求时，客户端都会发送相应的Cookie信息到服务端。它的过期时间可以任意设置，如果你不主动清除它，在很长一段时间里面都可以保留着，即便这之间你把电脑关机了。

**Session**：它是在服务端保存的用来跟踪用户的状态的数据结构，可以保存在文件、数据库或者集群中。在浏览器关闭后这次的Session就消失了，下次打开就不再拥有这个Session。

一个恰当的比喻：

> 比如当你在个推技术分享沙龙上觉得某位讲师讲得很好，在会后问了他几个问题，他对你这些问题进行了回答，这就是一个会话。但这个讲师太受欢迎，于是工作人员收集问题，并给每个提问者一个号码牌，讲师按照号码牌依次给出相应解答并告诉相应的人。这就是Session。一段时间后，当你再次遇见这位讲师，他发现你身上有上次回复你的答案，知晓你是那个好学的程序猿。于是你欣喜若狂，哇塞，讲师居然认出我了，这就是Cookie，你的小甜点。客户端好比听课的技术爱好者，服务端就是这位讲师。

1. Cookie 在客户端（浏览器），Session 在服务器端。
2. Cookie的安全性一般，他人可通过分析存放在本地的Cookie并进行Cookie欺骗。在安全性第一的前提下，选择Session更优。重要交互信息比如权限等就要放在Session中，一般的信息记录放Cookie就好了。
3. 单个Cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个Cookie。
4. Session 的运行依赖Session ID，而 Session ID 是存在 Cookie 中的，也就是说，如果浏览器禁用了 Cookie，Session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 Session ID）。
5. 用户验证这种场合一般会用 Session。因此，维持一个会话的核心就是客户端的唯一标识，即Session ID。

#### 如何维持不同设备的登录状态，如何设置过期时间？

[几种保持登录状态的方式](https://www.cnblogs.com/-new/p/6960901.html)

通过cookie、session和token来实现保持登录状态，在浏览器中，可以直接通过session机制来保持登录，其次就是通过cookie的方式来进行，对应的就是对cookie的加密和传输，会增加请求量。

在不是浏览器的客户端，需要通过手动添加token来实现。将token放在http 请求的头部，来进行传输，每次请求的时候都会带走。也会增加请求量。

#### 项目中的图片上传的过程，是不是有更好的插件使用呢？

`vue-simple-uploader`这个库可以实现upload的功能



#### 真正的程序员？

[什么是真正的程序员](https://www.cnblogs.com/xueweihan/p/5220513.html)

*我是为什么要成为一名程序员呢*？*为什么要成为一名工程师呢？*

看完这篇文章的感想：程序员其实只是使用了计算机的方式来解决了一些人们的实际问题，更多关注的其实是需求。

> 如果你解决的问题没有实际价值（为了解决问题而解决问题），忽略了'**以人为本**'。那么你永远不会的到真正的满足！"

###### 解决问题很好，但是问题是从哪里来的呢？

最近一直觉得能解决问题是一个很好的能力，也是一个加分项，但是你为什么要解决那个问题呢？那个问题是从哪里来的？

刚刚工作的我，对于需求其实没有太多的感受，其中也有很多的思考，为什么选择这个行业，是不是有更好的方式来解决我期待的问题。

回到初衷，什么是真正的需求呢？这其实是一个变化的的答案，它并不一定固定，完成一个app的开发，或者写好一个页面……这些都是可以成为工作的一部分，也可以是一个真实的需求，但是真正决定这个需求是不是能够成立的，是那些在软件背后真实的人。

那些希望用软件（编程）使自己生活更丰富的人，他们的需求才是真实的吧。

那些吹嘘的成就感和体验，可能并不会使自己获得满足，更重要的事情是如何将自己的注意力放在那些真实的需求上，而不是纠结在工作、工具、使用的方式。

想到一个例子：灯光就是一个**刚需**。

一开始使用蜡烛、之后用煤油灯，最后有了电灯，于是整个世界都能被点亮了。我们关注在一个真实的需求上，那结果可能完全不一样了，如何去实现这些需求才是关键，在原有的基础上，改进，用更新的技术来实现，这些都是可以的方式。

> "最后，当你解决了人们真正面临的问题的时候，你会觉得真正的满足！有的时候根本不需要计算机。"

你说你喜欢和机器打交道，所以选择了编程。

我想说，那你内心一定保留着与人打交道的期待。你一定还是希望和活生生的人互动，只不过你通过了其他的方式，隔着屏幕的方式罢了。

很早对TCP协议有了解，但是最近重新看，发现TCP协议不就是人与人之间的交流吗？我想找一个人，过去问一问，对方再给一个反馈，建立起了连接，就能继续聊更多的事情，也就能“传输数据”了。

计算机的本质和核心，我还没有深入的接触，但目前的感觉来说，计算机设计和本质，可能就是为了满足人们的需求，无论是第一台打孔机的诞生，还是第一台计算机的诞生，都是为了解决人面对的问题。

刚刚入职的我，还有很多的困惑，也会继续前进。

#### 划分数组的新方法

```js
12 => 12.00
1200 => 1,200.00
121212.12 => 122,212.12
```

之前使用的方法：

```js
formateNum(n, plusSymBol = false, decimalNums = 2) {
    var num = Number(n)
    if (Number.isNaN(num) || n === '') {
        return '0.00'
    }
    if (num < 0) {
        var neg = true
        num = Math.abs(num)
    }
    var arr = num.toFixed(decimalNums).split('.')
    var first = arr[0].split('')
    var newNum = []
    for (let i = 0, len = first.length; i < Math.ceil(len / 3) + 1; i++) {
        if (len > 3) {
            let tmp = first.splice(len - 3, len).join('')
            len = len - 3
            newNum.unshift(tmp)
        }
    }
    var result = ''
    if (arr[0].length <= 3) {
        result = first.join('') + '.' + arr[1]
    } else {
        result = first.join('') + ',' + newNum.join(',') + '.' + arr[1]
    }
    if (plusSymBol) {
        return neg ? '-' + result : result
    } else {
        return result
    }
}
```



```js
formateNum(n) {
    if (!n && n !== 0) return '0.00'
    if (isNaN(Number(n))) return '0.00'
    let decimal = '00'
    if (n.toString().indexOf('.') >= 0) {
        decimal = n.toString().split('.')[1]
    }
    let b = parseInt(n).toString()
    let len = b.length
    if (len <= 3) return b + '.' + decimal
    let r = len % 3
    return r > 0
        ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g).join(',') + '.' + decimal
    : b.slice(r, len).match(/\d{3}/g).join(',') + '.' + decimal
}
```



```js
if (isSeparate) {
    const numArr = stringNum.split('.')
    integer = numArr[0]
    decimals = numArr[1] || 0
    while (integer.length > minLength) {
        result = ',' + integer.slice(-3) + result
        integer = integer.slice(0, integer.length - 3)
    }
    if (integer) {
        result = integer + result
    }
    if (decimals) {
        result = result + '.' + decimals
    }
} else {
    result = stringNum
}
```



