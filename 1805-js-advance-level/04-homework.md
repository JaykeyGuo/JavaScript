# 04-homework

###### 作业：

`app.locals`和`res.locals`有什么区别？

> 优先级：`res.render` 传入的对象> `res.locals` 对象 > `app.locals` 对象，所以 `app.locals` 和 `res.locals` 几乎没有区别，都用来渲染模板，使用上的区别在于：`app.locals` 上通常挂载常量信息（如博客名、描述、作者信息），`res.locals` 上通常挂载变量信息，即每次请求可能的值都不一样（如请求者信息，`res.locals.user = req.session.user`）。
>
>  [渲染变量：app.locals 和 res.locals](https://github.com/nswbmw/N-blog/blob/master/book/4.5%20%E9%A1%B5%E9%9D%A2%E8%AE%BE%E8%AE%A1.md)

> 不同的是，`app.locals`会在整个生命周期中起作用；而`res.locals`只会有当前请求中起作用。由于`app.locals`在当前应用所有的渲染模中访问，这样我们就可以在该对象中定义一些顶级/全局的数据，并在渲染模板中使用。
>
> [Express 模板传值对象app.locals、res.locals](https://itbilu.com/nodejs/npm/Ny0k0TKP-.html)

`app.locals`与`res.locals`的作业范围不同，app.locals在整个生命周期，res.locals之后在请求中。所以需要注意的是对应的调用场景和时间。

---

