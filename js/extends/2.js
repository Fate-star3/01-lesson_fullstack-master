function Animal() {
    this.species = "动物"
}
Animal.prototype.sayHi = function () {
    console.log('---------');
}
function Cat(name, color) {
    // 具有species属性就行
    // this
    // Animal.apply(this,arguments)
    this, name = name;
    this.color = color;
}
// ptototype模式
// let ani=new Animal();
Cat.prototype = new Animal();//原型对象
Cat.prototype.constructor = Cat;
var cat1 = new Cat('大毛','黄色');
// console.log(cat.species, cat.saiHi());
// console.log(Cat.prototype.constructor);
console.log(cat1.species);