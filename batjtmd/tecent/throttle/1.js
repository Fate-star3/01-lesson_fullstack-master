// es6 reset 运算符 
function sayHi(...args) {
    console.log(args);
    // 函数里有 this, auguments 
    // console.log(arguments);
    // this 指向   
    // 严格模式    this  没什么 undefined 
    //  宿主环境     window ||  global  
    //  手动的绑定this 
    console.log('Hello', this.name);
}

// 相亲  广州 上门
let yf = {
    name: '彭云飞'
};  
// sayHi也是对象 call 方法 
// 第一个参数 指定this,  其余的参数， 交给函数本身作为参数
sayHi.call(yf, 1, 2, 3);  // 让普通函数 运行， 但是指定this 指向 
// sayHi.apply(yf);