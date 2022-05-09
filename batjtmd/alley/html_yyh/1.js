// 函数名大写，构造函数
// js 函数就可以构造一个类
// 早期没有css关键字
// 函数是一等对象，可以用来构造对象
// js 其实没有类 不需要class关键字
// 但不影响它做java的传统面向对象编程
function Cat(name) {
    // 给一组对象添加属性·
    this.name = name;
    // 内存开销 复杂得多 入栈 分配堆内存
    // this.makeSound = function(){
    //     console.log('喵喵喵');
    // }
}
// 是一个构造对象的函数
// 函数也是对象
// js 对象函数有prototype属性
// 共有的方法放到prototype对象中
Cat.prototype.makeSound = function () {
    console.log('喵喵喵');
}
Cat.prototype.eat = function () {
    console.log('吃鱼');
}
Cat.sayHi = function () {
    console.log('你好哇');
}
// 同一组对象 共同的类方法，属性模板
var xm = new Cat('小黑')
xm.makeSound();
console.log(xm.name);
console.log(Cat.prototype);
// xm.sayHi();// 不能调用
// var xh= new Cat('小花');
// console.log(xm==xh);
// // 判断两个对象是兄弟
// console.log(xm.constructor==xh.constructor);
// // 判断对象是某类的实例呢？
// // typeof [] object
// console.log(xm instanceof Cat);
// let a={};// 对象字面量的构造函数 Object
// let obj=new Object;// 对象字面量
// console.log(obj instanceof Object);
// console.log(typeof Object);