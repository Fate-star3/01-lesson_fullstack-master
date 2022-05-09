// 面向对象OOP的首要任务是封装， 属性和方法 成为实例化对象的模板
//  猫类模板  有公共属性name color
let Cat = {
    name:'',
    age:''
    
}

// 实例化对象

let Tom = {
    name:'Tom',
    color:'red'
}

let Cafei = {
    name:'加菲猫',
    color:'blue'
}
// 这样写的缺点？  与es5的构造函数+原型   或者es6的class类
    // 1.写起来麻烦 没有构造函数 我们可以把实例化属性的过程封装一下
    // 2.实例化对象和原型 它们直接没有联系