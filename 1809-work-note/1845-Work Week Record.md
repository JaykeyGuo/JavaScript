## 1845-Work Week Record

### 181105

- [x] 敦沛页面的样式修改
- [x] 敦沛页面的表单
- [x] 焯华页面修改

需要考虑不存在的报错的验证，比如没有bankCode的时候，也要知道在什么时候加以验证。

### 181106

- [x] 学习报表页面如何实现
  - [x] 有哪些API，实现不同的功能，做出对应的请求 => 写一个对应的api文档
    - [x] API**名称**，**URL**，**作用**，*在哪里调用*
  - [ ] 代理树如何实现
  - [ ] 报表如何展示和使用
- [x] 焯华
  - [x] 当银行列表为空的时候，隐藏对应的显示，已有银行列表判空存在
  - [x] 卖出的时候，先进行一次确认，再确定卖出
  - [x] 交割列表，删掉数量，把金额改成单价，下载表的数据名称（file_url or fileUrl）的名字确认

```powershell
├─api
├─assets
│  ├─images
│  ├─js
│  └─style
├─components
│  ├─0-home
│  ├─0-login
│  ├─1-account-manager
│  ├─2-member-manager
│  │  ├─add-agent
│  │  ├─agent-info
│  │  └─user-info
│  ├─3-report
│  │  ├─close
│  │  ├─deposit
│  │  ├─equity
│  │  ├─monthly
│  │  ├─open
│  │  ├─profit-loss
│  │  ├─transaction
│  │  └─turnover
│  ├─4-mt4-manager
│  ├─5-log
│  ├─6-config
│  ├─error
│  ├─private
│  └─public
│      ├─button
│      ├─tree
│      └─upload
├─dataConfig
├─define
├─error
├─mixins
├─router
├─store
└─utils
```

##### API

通过进入页面，发起两个请求，一个请求对于的用户信息，一个对应请求用户的权限。

```js
// home.vue

api.GetPermission
api.UserInfo

通过dataConfig中的UserInfo来初始化拿到的用户数据
```

由于后台的命名风格和前端不同，所以需要在拿到用户信息之后做一个统一化的处理，使得前端对于信息的处理更加便利。

```js
// userHeader.vue

api.logout

用户登出
```

```js
// menuBox.vue

传入参数，实现菜单的显示和路由的跳转，菜单的数据，初始化之后可以更快的来实现不同的跳转。
这里的scss的写法需要学习一下，如何实现在渲染是来的不同的样式中添加不同的图片
```

```js
// userPannle.vue

通过userInfo.js来拿到对应的数据，通过组件传值进来，一个动画实现对于的刷新。传入的数值和名称，通过vue的过滤器来实现显示和计算。
```

```js
// HistoryList.vue
通过home.vue来传入一个对应的值，来判断是否需要更新数据。
新建两个数据，一个是现在的list，一个是过去的list，通过函数来建立，比较方便。对三个类型的数据进行传值。

getItemPartData() 通过这个方法来实现对应的获取数据。
today的list，是通过请求的取消来实现不同的请求的。使用的方法是用对应的数据来实现的，也就是cancelSource来调用axios的cancelToken的方法来取消请求。
过去的list，只需要请求一次，就使用对应的数据。
```

### 181107

- [x] 敦沛忘记密码页面（两个接口）
- [x] 百丽新注册页面（样式，接口）

##### [Object.defineProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

通过这个语法，来实现对应的对象的属性的定义，新建或者修改。

### 181108

- [x] 百丽新注册页面（海雄完成组件化，方法）
- [x] 文传官网的浮窗API的更改
- [x] 敦沛页面翻译，联络我们

***使用Promise来解决异步方法的问题***

### 181109

- [x] 敦沛页面翻译修改
- [x] 敦沛页脚修改
- [x] 敦沛用户中心，使用iframe来嵌套pdf和html
- [ ] 报表学习
  - [ ] 代理树如何实现
  - [ ] 报表如何展示和使用
  - [ ] PC版与Mobile版的API的差别，补充，添加，修改，传参的类型

