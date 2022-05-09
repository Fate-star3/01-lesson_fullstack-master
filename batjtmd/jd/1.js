
function isfile(file) {
    if (!file) {
        return false
    }
    var array = file.split('')
    // console.log(array);
    // console.log(array.lastIndexOf('.'));
    // console.log(array.join('').slice(array.lastIndexOf('.')));
    var str = array.join('').slice(array.lastIndexOf('.') + 1)
    console.log(str);
    var fileArray = ['png', 'gif', 'webp', 'psd']
    if (fileArray.includes(str)) {
        console.log(true);
    } else {
        console.log(false);
    }

}

isfile("...a...webp")
// 函数， 判断 文件是否是图片文件
// a.txt
// b.jpg
// c.webp 
/**
 * 代码最重要是？ 是功能吗？ 在学校是 
 * 可读性  
 * @param {string} file 文件名
 * @return { boolean } 是否是图片
 * @author zpj
 * @date 2020-3-29
 */
function checkIsImage(file) {
    // console.log(file);
    // file 不能为空  
    if (!file) {
        return false;
    }
    // ['a', 'txt']

    // if (
    //     file.split('.')[1] == 'jpg' 
    //         || file.split('.')[1] == 'gif' 
    //         || file.split('.')[1] == 'jpeg'
    //         || file.split('.')[1] == 'png'
    //         || file.split('.')[1] == 'svg'
    //         || file.split('.')[1] == 'gif'
    //         || file.split('.')[1] == 'webp'
    //         || file.split('.')[1] == 'awebp'
    // ) {
    //     return true;
    // }
    let imgFormats = ['jpg', 'gif', 'jpeg', 'png', 'svg', 'webp', 'awebp'];
    // 三元运算符
    return imgFormats.indexOf(file.split('.')[1]) == -1 ? false : true;
    // if (pos == -1) {
    //     return false;
    // } else {
    //     return true;
    // }

    // return false;
}

console.log(checkIsImage('a.webp'));