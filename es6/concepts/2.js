'use strict';
// 箭头函数 函数表达式
// 作用：为了简化代码
let func = a => a
// 相当于
// let func = function (a) {
//     return a
// }

let res = (a,b) => {val:a+b}
// console.log(res(1,2));

let res2 = a => {
  
    console.log(this);//{} 指向顶层对象
    console.log(a);
}
res2(3)
// 箭头函数没有this，是通过作用域链查找到外部的this

function f() {
    'use strict';
    console.log(this == window);
    console.log(this == undefined);//true
}
f()

function F(a) {
    'use strict'
    this.a = a
    // Cannot set properties of undefined (setting 'a') 相当于undefined.a
}
// F()