
var Cat ={
    name:'大猫',
    makeSound() {
        console.log('喵喵喵');
    }
}

var girdFriend = {
    name:'Tom',
    makeSound() {
        console.log('喵喵喵1');
    }
}
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
// Object.create(proto，[propertiesObject])
//  proto：新创建对象的原型对象。返回值：一个新对象，带着指定的原型对象和属性。
var tom = Object.create(Cat)
// console.log(tom.name);//大猫
// tom.makeSound()
tom.name = 'TOM'
console.log(tom.name); //TOM
console.log(tom.__proto__);//指向Cat函数
console.log(tom.__proto__.constructor);
console.log(Cat);