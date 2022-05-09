// 立即执行函数
(function () {
    // console.log('立即执行');
    let a = 1
    let ret = 0
    let res = 0
    // 执行栈 JS运行
    // 将add函数入栈
    // 运行add函数 得到返回值 并修改ret的值
    ret = add(3, 5)
    console.log(ret);
    // 执行流程 回到了匿名函数？
})()


// 匿名函数的出栈操作 执行栈回归全局
// 回到全局栈后 出栈，  代码运行结束
let num = 2
function add(a, b) {
    return a + b
}
// let arr1 = [1,2,3]
// let arr2 = [,4,4]
// let res = arr1 + arr2
// console.log(res);