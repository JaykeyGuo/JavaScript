# 08-Multiple choice questions and explain your choice

问题:用自己的脑子做完这两个多选题，解释的时候使用你能想到的资源。

Q1:

```js
function bar(){
    return foo;
    foo = 10;
    function foo(){
    }
    var foo = "11";
}
console.log(typeof bar());

a. String   b. Error    c. function     d. Number   e. undefined
```

Q2:

```js
function ahahaha(){
    return
    var test= {
        name:"xiaoming"     //换成 xuShuai 会不会被打？
    }

    test = 18

    test = "Thank you for your teaching"
}

console.log( typeof ahahaha());

a. String   b. Error    c. function     d. Number   e. undefined  
```

给出你的回答，并解释原因。

---

A1: e选项:warning:

验证之后是c选项，可能的原因是，其实bar()定义的function，是一个完整的函数。

A2: c选项:warning:

验证之后是e选项，没有定义的函数，只有参数。

```js
function bar(){
console.log('1');
    return foo;
    var foo = "11";
console.log('2');
    foo = 10;
console.log('3');
    function foo(){
console.log('4');
    }
console.log('5');
    
console.log('6');
}
console.log('7');
console.log(typeof bar());
console.log('8');

//---
7
1
function
8
```

出错之后发现，函数的执行是优先的，在返回foo的值的时候，如果没有function foo(){}的定义，直接返回的是undefined，可见函数是优先执行的，即使var是有提升的，但是也要等待执行到才有值。得出的结论，函数的优先级高于var和赋值。

```js
function ahahaha(){
console.log('1');
    return
console.log('2');
    var test= {       
        name:"xiaoming"     //换成 xuShuai 会不会被打？
    };
console.log('3');
    test = 18;
console.log('4');
    test = "Thank you for your teaching";
console.log('5');
};
console.log('6');
console.log( typeof ahahaha());

//---
6
1
undefined
```

原因是返回的是空值。

---

*JS 中自带的分号，需要注意，在一些地方其实是不注意的，像是在这次的函数中定义的`return;`*