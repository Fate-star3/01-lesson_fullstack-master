function Cat(name, age) {
    // 公共属性
    this.name = name
    this.age = age
    // this.type = '猫科动物'
    // this.eat = function () {
    //     console.log('eat 老鼠');
    // }
}
// 将构造函数上的公共属性和方法放在原型链上 可以省内存
// 所有实例共享prototype对象上的属性和方法
// 如果区分   对象本身的属性和方法(constructor)   prototype原型链上的属性和方法
Cat.prototype.eat = function() {
    console.log('eat 老鼠');
}
Cat.prototype.type = '猫科动物'

let cat1 = new Cat('tom',18) //从内存上看 每实例化一个对象  分配了新的内存空间
let cat2 = new Cat('cafei',19)
cat1.eat()
console.log(cat1.type);

console.log(cat1.hasOwnProperty('name'),cat2.hasOwnProperty('type')); //true false
// 首先到自身的属性上(OwnProperties)寻找，如果有的话，就返回结果；如果找不到就到prototype上寻找(按着原型链往上查找)  
console.log(cat2.toString());//[object Object] 调用了object上的方法

console.log(cat2.__proto__);//{ eat: [Function (anonymous)], type: '猫科动物' }
console.log(cat2.__proto__.__proto__) //[Object: null prototype] {}
console.log(cat2.__proto__.__proto__.__proto__)//null