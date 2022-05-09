let arr = [1,2,3,4,5,6,7,8,9,0]
console.log(arr.join(''));
console.log(arr.join('').replace(/([0-9]{3})(\d{3})(\d{4})/,function() {
    // RegExp.$1是匹配第一个组匹配  RegExp.$2是第二个
    return `(${RegExp.$1})${RegExp.$2}-${RegExp.$3}`
}))