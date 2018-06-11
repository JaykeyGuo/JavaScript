# 06-homework

作业：

1. 一个需求，知道在何处的客户端访问网页，一个中间件express-useragent
2. MongoDB的增删改查的对应指令

------

作业1：express-useragent

### for [ExpressJS](http://expressjs.com/)

```js
var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function(req, res){
    res.send(req.useragent);
});
app.listen(3000);
```

作业2：MongoDB的增删改查

```sh
//增加或修改用户密码
$ db.addUser('name','pwd')
//查看用户列表
$ db.system.users.find()
//用户认证
$ db.auth('name','pwd')
//删除用户
$ db.removeUser('name')
//查看所有用户
$ show users
//查看所有数据库
$ show dbs

//存储嵌套的对象
$ db.foo.save({'name':'ysz','address':{'city':'beijing','post':100096},'phone':[138,139]})
//存储数组对象
$ db.user_addr.save({'Uid':'yushunzhi@sohu.com','Al':['test-1@sohu.com','test-2@sohu.com']})
//根据query条件修改，如果不存在则插入，允许修改多条记录
$ db.foo.update({'yy':5},{'$set':{'xx':2}},upsert=true,multi=true)
//删除yy=5的记录
$ db.foo.remove({'yy':5})
//删除所有的记录
$ db.foo.remove()

//查找所有
$ db.foo.find()
//查找一条记录
$ db.foo.findOne()
//根据条件检索10条记录
$ db.foo.find({'msg':'Hello 1'}).limit(10)
//sort排序
$ db.deliver_status.find({'From':'ixigua@sina.com'}).sort({'Dt',-1})
$ db.deliver_status.find().sort({'Ct':-1}).limit(1)
//count操作
$ db.user_addr.count()
//distinct操作,查询指定列，去重复
$ db.foo.distinct('msg')
//”>=”操作
$ db.foo.find({"timestamp": {"$gte" : 2}})
//子对象的查找
$ db.foo.find({'address.city':'beijing'})
```

