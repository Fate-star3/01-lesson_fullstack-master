let num = 45
// 进行进制转换 使用toString()方法
console.log(num.toString(2),typeof num.toString(2));//101101 string
console.log(parseInt(num.toString(2)),Number(num.toString(2)),+num.toString(2));//101101 101101 101101
console.log(num.toString(8),num.toString(16));//55 2d