# 04-数组元素和数组对象属性

[【10.4练习】](http://xugaoyang.com/post/59d478fdae352c0a7b6df3e2)

```js
var obj = {
  count: 1
}

var myArray = ['red', 'white', 'black'];
console.log(myArray.length);

myArray.obj = obj;
console.log(myArray.length);
```

两次打印myArray的length是多少？为什么？

------

###### 回答：

```js
3	//第一次
3	//第二次
```

两次打印的结果是相同的，原因是在`myArray.obj = obj`这一句中，其实并没有对应的obj对象存在，所以数组其实是没有变化的。

---

在数组中添加数据的方式是：

```js
Array.unshift("foo");	//添加在第一个
Array.push("foo");	//添加在最后一个
```

------

其实`myArray.obj = obj`其实已经将对象添加到数组中来，只是在记熟的时候，`.length`并没有把obj算入统计。

> 随时设置length属性来缩短一个数组，它真的就缩小的，只会保留length个元素。 当你通过改变length属性扩大数组时，实际的元素个数并没有增加，例如，当前数组有2个元素，把length设置为3，数组依然只包含2个元素。因此 length属性不能确切的反映数组中的元素个数。
>
> —— MyColourfulLife

> 数组是对象的特殊形式，它同样有着属性名的概念，但和对象不同的是它使用0~2^32-2之间的整数属性名作为数组的索引，当不指定属性名时默认使用索引作为属性名。而length属性值，即数组的方法.length的值始终等于当前最大索引+1。
>
> 本例里初始赋值自动为三个元素建立了索引，最大索引为2。第一次myArray.length = 2 + 1，所以是3。而后加入的obj由于属性名obj不是索引，自然不影响索引号和length的值，所以第二次输出myArray.length还是3。
>
> ——freedomsky11

数组对象的索引其实是八位的正二进制数，如果在新的对象进来的时候没有赋予对应的索引就不会统计。

数组的索引也是可以跳跃的，不一定是每一个值都有，可以有空值(undefined)存在。

---

一个思考：数组是不是存在一个去掉空索引并排序的函数呢？

###### 第一种方法：

```js
Array.prototype.notempty = function(){  
    for(var i=0; i<this.length; i++){  
         if(this[i] == "" || typeof(this[i]) == "undefined"){  
             this.splice(i,1);  
              i--;  
         }  
     }  
    return this;  
}; 

array.notempty();
```

###### 第二种方法：使用filter()函数

```js
var arr = [1,2,,3,,3,,,0,,,4,,4,,5,,6,,,,];  
arr = arr.filter(function(n){return n}); 
arr // [1, 2, 3, 3, 4, 4, 5, 6]  
```

