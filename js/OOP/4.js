// 继承
// 父类
var Animal = {
    createNew: function() {
        var animal = {};
        animal.sleep = function() {
            console.log('睡觉奥')
        }
        return animal;
    }
}

var Cat = {
    sound: '私有声音', // 私有属性  私有属性是内部使用的  
    createNew: function(name) {
        var cat = Animal.createNew(); //将animal对象(有一个sleep方法)赋值给cat
        cat.name = name;
        var sound = '私有声音'; // 私有属性 没有添加进cat中
        cat.makeSound = function() {
            console.log('喵喵');
        }
        return cat;
    }
}

var tom = Cat.createNew('布偶');
console.log(tom);
console.log(tom.sound); // undefined
console.log(Cat.sound);
tom.sleep();
tom.makeSound();