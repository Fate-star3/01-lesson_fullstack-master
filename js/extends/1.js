class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name}打招呼`);
    }
}

class Dog extends Animal {
    constructor(name, type) {
        super(name);
        this.type = type;
    }
    sayHi() {
        console.log(`${this.name}汪汪汪`);
    }
}

// js中的  class extends super ,只是语法糖， 没有改变原型式的面向对象的本质
const dog = new Dog('大毛','拉布拉多');
// console.log(dog);  
// console.log(dog instanceof Dog);// true
console.log(dog.__proto__.__proto__.__proto__);