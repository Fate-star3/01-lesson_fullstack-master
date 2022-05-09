/**
 * 面试编程题 写一个函数
 * 传统的面向对象语言  实例
 * dog  Object实例出来， 原型链， 
 * dog.__proto__ ->  ==  b.prototype  b是a的原型对象 
 * dog.__proto__.__proto__.__proto__  ->  null   b是a的原型链上对象
 * instanceof 传统语言中判断的是a是b的实例
 * js  中 instanceof 运算符用于判断构造函数的protype属性是否出现在对象的
 * 原型链中的任何位置。 
 * @func  instanceof 实现
 * @params a 对象   b 对象 
 * @return  boolean  
 */
function Cat() {

}
function Dog() { // 构造函数
}
// 原型 
Dog.prototype.sayHi = function () {
}
function myInstanceof(a, b) {
    if (a == null || b == null) {
        console.log('null没有原型和原型对象');
        return
    }
    // 原型 
    // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
    let proto = Object.getPrototypeOf(a);
    let bPrototype = b.prototype
    // console.log(proto, a.__proto__);

    // if (proto == bPrototype || proto.__proto__ == bPrototype || proto.__proto__.__proto__ == bPrototype)  {
    //     console.log(true);
    // }else {
    //     console.log(false);
    // }
    let flag = null
    while (true) {
            
        if (proto == null) {
            break
        }
        if (proto == bPrototype) {
            flag = true
            console.log(flag);
        }
        proto = Object.getPrototypeOf(proto)
    }

    if (flag != true) {
        console.log(false);
    }
}
const dog = new Dog()
myInstanceof(dog, Dog);  // true
myInstanceof(dog, Object); // true
myInstanceof(dog, Cat);//false
myInstanceof(dog, null); 