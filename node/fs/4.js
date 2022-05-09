let fs = require('fs')
let path = require('path')
/**
 * @func  找出指定目录下最大的文件
 * @param {string} dir 
 * @param {function} cb 
 */

function findLargest(dir, callback) {
    //  读取目录的内容 files 是目录中文件名的数组
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback(err)
        }

        console.log(files);
        var count = files.length //文件数量
        var errord = false //是否出错
        var stats = []
        files.forEach((file, index) => {
            console.log(path.join(dir, file));
            fs.stat(path.join(dir, file), (err, stat) => {
                if (errord) return

                if (err) {
                    errord = true
                    return callback(err)
                }
                // console.log(stat);//输出文件的属性信息
                // Stats {
                //     dev: 1324351183,
                //     mode: 16822,
                //     nlink: 1,
                //     uid: 0,
                //     gid: 0,
                //     rdev: 0,
                //     blksize: 4096,
                //     ino: 2251799813702053,
                //     size: 0,
                //     blocks: 0,
                //     atimeMs: 1651153073713.2014,
                //     mtimeMs: 1651149705099.823,
                //     ctimeMs: 1651149705099.823,
                //     birthtimeMs: 1651149613088.7522,
                //     atime: 2022-04-28T13:37:53.713Z,
                //     mtime: 2022-04-28T12:41:45.100Z,
                //     ctime: 2022-04-28T12:41:45.100Z,
                //     birthtime: 2022-04-28T12:40:13.089Z
                //   }
                stats[index] = stat //将文件的信息存入数组
                // 当所有Stats存入数组时 进行比较大小
                if (--count == 0) {

                    var fileStates = stats.filter((stat) => stat.isFile()) //如果 <fs.Stats> 对象描述常规文件，则返回 true。
                    let maxFileSize = 0
                        // 遍历数组 查找size最大的元素
                    for (const fileStat of fileStates) {
                        if (fileStat.size > maxFileSize) {
                            maxFileSize = fileStat.size
                        }
                    }
                     
                    callback(null, maxFileSize)
                }
            })
        })
    })
}

findLargest('./test/', (err, fileSize) => {
    if (err) {
        return console.log(err);
    }
    console.log('largest file war:' + fileSize);
})
// var fs = require('fs');
// var path = require('path'); // 路径上升到模块

// /**
//  * @func  找出指定目录下最大的文件
//  * @param {string} dir 
//  * @param {function} cb 
//  */
// function findLargest(dir, cb) {
//     // 读取目录的内容 files 是目录中文件名的数组
//     fs.readdir(dir, (err, files) => {
//         // console.log(files);
//         if (err) { 
//             return cb(err);
//         }
//         console.log(files);
//         // cb(null, files)
//         // 是文件， 还是目录？
//         // fs.readFile(files[0]) 
//         var couter = files.length; // 数量
//         var errored = false;   // 是否出错？ 
//         var stats = []; // 
//         files.forEach((file, index) =>  {
//             // 得到相对于当前4.js 的对的目录
//             fs.stat(path.join(dir, file), (err, stat) => {
//                 if (errored) return;
//                 if (err) {
//                     errored = true;
//                     return cb(err)
//                 }
//                 stats[index] = stat; // 所有文件信息  入数组了
//                 if (--couter  == 0) { // 最后一个
//                     var fileStats = stats
//                         // .map  把一个数组  变成一个新的数组  
//                         .filter((stat)=> stat.isFile());
//                     let maxFileSize = 0;
//                     for (let fileStat of fileStats) {
//                         if (fileStat.size > maxFileSize) {
//                             maxFileSize = fileStat.size;
//                         }
//                     }
//                     cb(null, maxFileSize);
//                     // console.log(largest);
//                 }
//             })
//             // fs.stat(path.join(dir, file))
//         }) 
//     }) // 异步
// }

// findLargest('./test', (err, fileSize) => {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('largest file war:', fileSize);
// })