# Vue Router 

#### router-link 组件

```html
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

就像是组件一样，Vue-Router也可以写成一个标签。

**当 `<router-link>` 对应的路由匹配成功，将自动设置 class 属性值`.router-link-active`。**

### 动态路由匹配

```js
const User = {
    template: '<div>User</div>'
}

const router = new VueRouter({
    routed: [
        { path: '/user/:id', component: User }
    ]
})
```

对于动态的路由，可以通过对于的路由组件来生成对于的路由地址和内容，内容会在模板中，路由ID则是动态的。

路由中的返回值都会在参数中体现：`$router.params`。

在使用组件的时候，可以通过对于的监听路由的变化来做出相应。

```js
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

### 嵌套路由

```js
const router = new VueRouter({
    router: [
        { path: '/user/:id', component: User,
         children: [
             { path: '', component: UserHome },
             { path: 'profile', component: UserProfile },
             { path: 'posts', component: UserPosts }
         ]
        }
    ]
})
```

### 编程式的导航

#### `router.push(location, onComplete?, onAbort?)`

| 声明式                    | 编程式             |
| ------------------------- | ------------------ |
| `<router-link :to="...">` | `router.push(...)` |

会在 history 中新增下一条记录

```js
const userID = 123
router.push({ name: 'user', params: { userID }})
// => /user/123
router.push({ path: `/user/${userID}` })
// => /user/123
router.push({ pathL '/user', params: { userID }})
// => /user/123
```

通过不同的方式都能讲对于的路由参数传入。

#### `router.replace(location, onComplete?, onAbort?)`

> 跟 `router.push` 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

#### `router.go(n)`

n 为整数，声明路由向前或向后退多少步。

---

[命名视图](https://router.vuejs.org/zh/guide/essentials/named-views.html#%E5%B5%8C%E5%A5%97%E5%91%BD%E5%90%8D%E8%A7%86%E5%9B%BE)

在一个页面中有多个视窗，可以在多个视窗之间切换。

```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

```js
const router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                default: Foo,
                a: Bar,
                b: Baz
            }
        }
    ]
})
```

