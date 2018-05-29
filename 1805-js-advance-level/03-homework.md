# 03-作业

```js
res.send()
res.end()
res.json()
res.render()
```

这四者的作用分别是什么？

###### `res.end([data][,encoding])`

结束请求，不使用任何数据。

###### `res.send([body])`

送出数据的命令，其中的body能使用不同的类型，可以先前定义送出的数据类型（Content-Type），字符串和JSON都行。

###### `res.json([body])`

送出一个JSON数据，无论是什么JSON的类型数据都可以。

会通过`JSON.stringify()`来转换成JSON。

###### `res.render(view [,locals][,callback])`

渲染一个页面，并送出对应的HTML。第一个参数是路径，第二个是对应的callback函数。

---

参考资料：[Express 4.x API](http://expressjs.com/zh-cn/4x/api.html#res.end) 