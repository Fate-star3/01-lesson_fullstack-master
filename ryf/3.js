function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// 2.js  + 3.js cat1  和 Cat之间是什么关系? 
let cat1 = new Cat('大毛', '黄色');
let cat2 = new Cat('二毛', '黑色');
console.log(cat1.constructor) // 父子关系
console.log(cat1.constructor == cat2.constructor); // 兄弟 

console.log(cat1.__proto__, cat1.__proto__ == cat2.__proto__); 
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor);//true
console.log(cat1 instanceof Cat); //true
console.log(Cat.prototype.isPrototypeOf(cat1)); //true   isPrototypeof()方法用来检查构造函数是否有这个实例化对象
// isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。