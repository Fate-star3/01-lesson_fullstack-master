// 执行栈的机制让JS语言得以运行起来
// 代码是一行一行运行的
// 执行栈的顶部 是当前正在执行的代码
// 全局栈 f1 f2
f2() //函数声明相当于出栈  还有内存的回收
f1()

function f1(){
    console.log('f1');
}

function f2(){
    console.log('f2');
}

// 函数表达式不能进行函数提升
// var f1 = function () {
//     console.log('f1');
// }

// var f2 = function () {
//     console.log('f2');
// }
