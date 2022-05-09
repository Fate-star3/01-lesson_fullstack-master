// js 早期版本没有class关键字
// es6提供了class ，但是class只是语法糖 底层原型式面对对象并没有改变
// class传统面对对象  java一样来写JS

class SimpleBrower {
    constructor() {
        this.x = 1
    }
    push() {

    }
}


let brower = new SimpleBrower()
console.log(brower.__proto__.constructor.name);//SimpleBrower
let res = Object.keys(brower).forEach((item) => {
    console.log(item);
})  
for (const key in brower) {
    if (Object.hasOwnProperty.call(brower, key)) {
        const element = brower[key];
        console.log(key);
        console.log(element);
        
    }
}