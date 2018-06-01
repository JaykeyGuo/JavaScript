# 1805-JS-内置库

#### typeof

```javascript
//判断类型
typeof xxx;
```

#### 字符串

```javascript
//计算长度
xxx.length;
//像数组一样抓取字符
var stringName = "xxxxxx";
var firstLetterOfStringName = stringName[1];
```

#### 数组

```javascript
//数组删除最后一个
Array.pop();
//数组删除第一个
Array.shift();
//数组添加第一个
Array.unshift("foo");

//函数无参
function myFunctionName (){
    //Content
}
//执行函数
myFunctionName();

//函数有参
function getParamarsFunction (pr){
    change pr;
}

//转换为 JSON 字符串
JSON.stringify(anything);

//几个等号的不同
=== == !== !===
    
//选择器
array.filter(function(currentValue,index,arr), thisValue)
```

#### 条件语句 
```javascript
//if条件语句
if (age >= 18) {
  console.log('已成年');
} else {
  console.log('未成年');
}

//switch条件语句
switch (age >= 18) {
  case true:
    console.log('已成年');
    break; // 退出循环
  case false:
    console.log('未成年');
    break; // 退出循环
  default:
    console.log('not a human');
}

// 上面的switch代码是否存在逻辑问题？
// 不会出现default的情况
```
#### 循环语句

```javascript
//for循环
for (var i = 0; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i]);
}

// 等价于下面(把初始化变量提前)
var i = 0;
for (; i < myLikeColorsList.length; i++) {
  console.log(myLikeColorsList[i]);
}

// 等价于下面(把初始化变量提前，把计数器的自增放在循环体内)
var i = 0;
for (; i < myLikeColorsList.length;) {
  console.log(myLikeColorsList[i]);
  i = i + 1; // i++;
}

// 初始化变量可以是多个，计数器变量更新也可以是多个
for (var i =0, j = 0; i < myLikeColorsList.length; i++, j++) {
  console.log('种类' + j);
  console.log(myLikeColorsList[i]);
}

// 创新的轮询数组的技巧
// 两头同时轮询，轮询时间只用到了一半。
for (var i =0, j = myLikeColorsList.length - 1; i < myLikeColorsList.length /2 ; i++, j--) {
  console.log(myLikeColorsList[i]);
  console.log(myLikeColorsList[j]);
}

//while循环
//只要满足while的条件，就会循环执行循环体的代码
var i = 0;
while (i < myLikeColorsList.length) {
  console.log(myLikeColorsList[i]);
  i = i + 1; // i++;
}
```
#### 符号判断

```javascript
//判断恒等
3 === 3   // true
3 === '3' // false
//---
1 != 2      // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
//判断非恒等
3 !== 3   // false
3 !== '3' // true
4 !== 3   // true
//---
 5 > 3   // true
 7 > '3' // true
 2 > 3   // false
'1' > 9  // false
//---
 6  >=  6  // true
 7  >= '3' // true
 2  >=  3  // false
'7' >=  9  // false
//---
  2 < 5  // true
'3' < 7  // true
  5 < 5  // false
  3 < 2  // false
'8' < 4  // false
//---
  4 <= 5  // true
'7' <= 7  // true
  5 <= 5  // true
  3 <= 2  // false
'8' <= 4  // false

```

#### JSON

```javascript
// 使用Object替代switch的判断
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams", 
    bravo: "Boston",
    charlie: "Chicago",
    delta:  "Denver",
    echo:  "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}
phoneticLookup("charlie");

//Object调用
myObj.aaa.bbb[ccc];

//循环判断JSON调用
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  var getProp;
  for (i=0; i < contacts.length; i++) {
    if (contacts[i].firstName === firstName) {
       if (contacts[i].hasOwnProperty(prop)) {
         return contacts[i][prop];
       } else {
         return "No such property";
       }
    }
  }
  return "No such contact";
}
lookUpProfile("Akira", "likes");

//json.filter
function lookUpProfile(firstName, prop) {    
    var result = contacts.filter(x => x.firstName == firstName)
    if (result.length === 0) {
        return "No such contact";
    } else {
        return result[0][prop] ? result[0][prop] : "No such property";
    }
}

//json.find
function lookUpProfile(firstName, prop) {
    let contact = contacts.find((x) => x.firstName === firstName)
    return contact ? contact.hasOwnProperty(prop) ? contact[prop] : "No such property" : "No such contact”;
```
#### 内置函数
```javascript
//随机-产生0～1的随机数
Math.random();
    
//取整
Math.floor(num);

//四舍五入
Math.round(num);

//随机范围
Math.floor(Math.random() *(myMax - myMin + 1) + myMin); 
```
#### 

> `regular expression`: `/the/gi`
>
> Let's break this down a bit:
>
> `/` is the start of the regular expression.
>
> `the` is the pattern we want to match.
>
> `/` is the end of the regular expression.
>
> `g` means `global`, which causes the pattern to return all matches in the string, not just the first one.
>
> `i` means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.

```javascript
//找对应字符“and”
var expression = /and/gi; 
var andCount = testString.match(expression).length;
    
var testString = "There are 3 cats but 4 dogs.";

//找数字digit：“\d+"
var expression = /\d+/g;  // Change this line
var digitCount = testString.match(expression).length;

//找空格:"\s+"
var expression = /\s+/g;
//找不是空格的所有:"\S"
var expression = /\S/g;
```
#### 定义类
```javascript
//定义类constructor
var Car = function(w,s,e) {
  this.wheels = w;
  this.seats = s;
  this.engines = e;
};

//有类创造数据
var myCar = new Car(3,1,2);

//map，遍历数据
var newArray = [1,2,3,4,5];
var addThree = newArray.map(function(val){
    return val + 3;
});
console.log(addThree);
```

#### Object对象

```js
Object.assign(target, ...sources);


var obj = {
    hello: 100;
}
Object.assign({}, obj);	//复制一个对象
```

