// 传统面对对象
// 类是对象的属性和方法模板
// 只要是对象就都有prototype 
class Dog {
    constructor(type, color) {
        this.type = type
        this.color = color

    }
    // class通过 static 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。不需要实例化类，即可直接通过该类来调用的方法，即称之为“静态方法”。将类中的方法设为静态方法也很简单，在方法前加上static关键字即可。这样该方法就不会被实例继承！
    // static makeSound() {
    //     console.log('汪汪汪');
    // }
    // eat() {
    //     console.log('骨头来一根');
    // }
}
// Dog.prototype = {
//     makeSound1() {
//         console.log(`${this.type}汪汪汪`);
//     },
//     eat() {
//         console.log('骨头来er根');
//     }
// }
// Dog.prototype.eat = function () {
//     console.log('骨头来er根');
// }


// Object.assign 一般使用这个方法在类的原型上添加多个方法
// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
// 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。
// Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
Object.assign(Dog.prototype,{
        makeSound1() {
        console.log(`${this.type}汪汪汪`);
    },
    eat() {
        console.log('骨头来er根');
    }
})

// 共同的方法和属性放在原型链上 可以节省内存，复用代码
let dog1 = new Dog('中华田园犬', '黑色')
let dog2 = new Dog('萨摩耶', '黄色')
console.log(dog1.__proto__.constructor);
// console.log(Dog.prototype);
console.log(dog1 instanceof Dog);//true
// dog1.makeSound1()
// Dog.makeSound() //通过类本身调用 类.方法
console.log(dog1.constructor == Dog.prototype.constructor);
console.log(Object.getOwnPropertyNames(Dog.prototype));
console.log(Dog.prototype);
console.log(dog1.__proto__);
// dog1.eat()