// 手动实现一个forEach函数
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        let index = i
        callback(element, index,array)
    }

}
forEach([1, 2, 3, 4, 5], function (element, index, array) {
    console.log(element, index,array);
})
