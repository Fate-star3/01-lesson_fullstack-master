// require 关键字 引入一个模块 
// 4.js 执行权在内存中

// node里的API都是异步的
let fs = require('fs')
fs.readFile('./1.js',function(err,data) {
    console.log(data.toString());
})

console.log('111111111111111');