# 对象
#### 对象字面量
> 
```javascript
1.使用对象字面量表示法创建对象
    var person = {
        name: "崽崽",
        sex: "男",
        age: 18,
        sayHi: function () {
            console.log("你好啊");
        }
    };
    
     
```
#### 检索
```javascript
console.log(person.name);//点语法，使用较多
console.log(person["age"]);//在使用中括号时要在内使用属性名的字符串形式 数字键名得用方括号运算符
let sex1 = "sex";//要将属性名赋值给变量
console.log(person[sex1]);//使用这种方式的主要优是可以通过变量访问属性
person.sayHi()
person.phonenumber //undefined 检索对象不存在的会返回undefined

```
#### 更新
```javascript
    1.如果属性名已经存在于对象中，那么这个属性值将会被替换
    person.name = "张三"
    console.log(person.name) //张三
    2.如果对象之前并没有该新增的属性，则添加到对象当中
    person.id = 10086
    console.log(person.id)//10086
```
#### 引用
```javascript
    对象通过引用来传递，永远不会被拷贝
    var x = person 
    x.name = "zs"
    var ls = person.name
    console.log(ls)// zs  因为变量x 和 person 都是同一个对象的引用 所以ls的值为zs

    var a = {} 
    var b = {}
    var c = {}
    // 这是三个不同的对象
    
    a = b = c = {}
    // 都引用同一个对象

```
#### 原型
```javascript
    每个对象都有原型对象，自然也有原型链
    当你创建一个新对象时，可以使用某个对象作为它的原型
    我们为object新增一个beget方法用来创建一个使用原对象作为其原型的新对象
    if( typeof Object.beget !== 'function') {
        Object.beget = function (o) {
            var F = function () {
                F.prototype = o
                return new F()
            }
        }
    }
    var another_person = Object.beget(person)
    another_person.name = abc

    原型关系是一种动态的关系，如果我们添加一个新的属性到原型中，name该属性会立即对所有基于该原型创建的对象可见
    person.idcard = 123456
    console.log(another_person.idcard) //123456 
```
#### 反射
```javascript
    通过使用typeof操作符可以检验对象的属性类型
        typeof person.name // string
        typeof person.age // number
        typeof person.sayHi // object
        typeof person.hello // undefined
    通过使用hasOwnProperty方法检验一个属性是否属于该对象，如果属于返回true，如果不是，返回false
    person.hasOwnProperty('name') //true
    person.hasOwnProperty('_name') //false

```
#### 枚举
```javascript
    1.for in 语句可以用来遍历一个对象中所有的属性名 缺点：不能按照顺序返回属性名
    function Hero(uname,type,blood) {
            this.name = uname;
            this.type = type;
            this.blood = blood;
            this.attack = function (att) {
                console.log(att);
            }
        }
        var hy = new Hero("后羿","射手型","100");
        var lp = new Hero("廉颇","力量型","500");
        console.log(hy.name);
        hy.attack("远程");
        for (const key in hy) {
           console.log(hy[key]);
            
        }
        for (const key in lp) {
           console.log(lp[key]);
            
        }
    2.可以使用for语句按正确的顺序得到我们想要的值
        var array = [color,wight,grade,type]
        var computer = {
            color:"红色",
            wight:"2千克",
            grade:"联想",
            type:"拯救者y7000",
            work:function(){
                console.log("我可以看电影");
                console.log("我可以听音乐");
                console.log("我可以打游戏");
                console.log("我可以敲代码");
            }
        };
        for (let i = 0; i < array.length; i++) {
           console.log(array[i] + ":" + computer[array[i]]);
            
        }
```
#### 删除
```javascript
    delete 运算符可以用来删除对象的属性。它会移除对象中的存在的属性，且不会触及原型链上的任何对象
    删除对象的属性可能会让来自原型链中的属性浮现出来
    another_person.name // abc
    delete another_person.name 
    another_person.name // zs

```