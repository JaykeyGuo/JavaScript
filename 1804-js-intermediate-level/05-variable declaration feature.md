# 05-变量提前声明的特点

1. ```js
   console.log(name0);
   var name0 = 'xiaoming';
   console.log(name0);
   ```

以上两个输出分别是什么？为什么？

1. ```js
   console.log(name1);
   let name1 = 'xiaoming';
   console.log(name1);
   ```

以上两个输出分别是什么？为什么？

1. ```js
   console.log(name2);
   const name2 = 'xiaoming';
   console.log(name2);
   ```

以上两个输出分别是什么？为什么？

---

```js
undefinied	//name0-第一次
xiaoming	//name0-第二次

ReferenceError: 'name1' is not defined	//name1-第一次
xiaoming	//name1-第二次

ReferenceError: 'name2' is not defined	//name2-第一次
xiaoming	//name2-第二次
```

`name0`的两个返回值，第一个是无定义，第二个是对应赋值之后的值。

#### var、let、const的异同

###### var变量

最常用的变量，作用域也是最广的。

> 通过var声明的变量在它们所声明的函数内始终是存在的，但直到代码执行到var语句时才初始化变量。也就是说，变量是存在的（不会抛出引用错误异常），但在var语句执行之前它的值是undefined。通过let声明变量的情况与之类似，如果在let语句之前使用这个变量（与let语句在同一个块作用域内），变量是存在的，但值是undefined。
>
> ——《犀牛书.page[273]》

###### let局部变量

在对应的作用域内发挥变量的作用：

```js
function oddsums(n){
    let total=0, result=[];
  	for(let x=1;x＜=n;x++){
        odd=2*x-1;
        total+=odd;
        result.push(total);
	}
    return result;
}
//对应的total、result、x、odd都只有在函数和循环体中有作用
oddsums(5);//返回[1,4,9,16,25]
```

###### const常量

const的定义需要一个初始值，定义之后不改变。

##### 三者的不同

> **var定义之后有提升**，会提到最前方执行，但是与此同时，在没有执行到对应的语句时候，仍旧是`undefined`。
>
> let局部变量有其作用域，在作用域之外调用会报错。
>
> const需要初始值，全局变量，定义之后不改变。

*知识点：JS中没有块级作用域。*