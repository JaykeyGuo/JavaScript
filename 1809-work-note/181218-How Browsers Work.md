# [How Browsers Work](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

##### 概念清单

> DOM 树
>
> 呈现树
>
> BNF
>
> 移位归约解析器
>
> DTD(Document Type Definition)：文档类型定义

HTML解释器的容错性：在Vue中之所以能够使用不同的名字的标签来声明组件，**可能是**在浏览器的HTML的解释器中对标签名字的包容性，并不会报错，而是去修复这些看似无效的结构。