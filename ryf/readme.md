# 前端珠峰-- 阮一峰   

## 面向对象  

- 人生最难的事？  
    找对象   
- JS编程最难的事情？  
    对象   
- js 的面向对象  
    1. JS 是一个基于对象的语言  
    2. JS 又不是一种真正的面向对象（OOP）语言    
        关键字  早期  js 不提供  class  ，implements，extend（继承）（pubic ，private，static）
        基于原型式的面向对象  function + this + prototype   

- 生成实例对象的原始模式  
    js 内置的对象字面量  
        1. 繁琐  ->  
        2. 没有什么约束    
- 构造器模式  
    1. 构造函数，封装实例化  赋值属性的过程， 首字母大写 + this  + new （JS语言的设计）  
    js 是面向对象的语言， 但是不同于普通的OOP ，一切皆为对象 ，面向对象式编程更纯粹    
    为了简化实例化过程，使用函数封装 ，this 指向等下会返回的实例 ，并且new 的方式调用， this 指向实例    

    缺点是？
 

- 弹性布局太爽了  ，因为在弹性内部 ， 格式上下文是弹性的 ？ display： flex; BFC 概念   
    flex 做两列 ， 三列 ，自适应  ，简单   
    缺点  浏览器兼容比较差  ie9以前 不支持  

- float 浮动  
    1. 浮动 ，离开文档流 ，margin-left | margin-right 不重叠   
    2. BFC   当我们给main 加一个overflow：hidden ，魔法一样，感知到兄弟元素一样   
        css 加了一个overflow：hidden， 启用了格式化上下文之 BFC 原则  ，
        main 元素进入全新的上下文context（环境）
