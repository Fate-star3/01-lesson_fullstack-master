const fs =  require('fs')

fs.stat('./a.txt',(err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('----------');
   console.log(data.toString());//异步任务
})
let info = fs.statSync('./a.txt') //同步任务 先输出
console.log(info);