// 数组去重 
const arr = [12, 5, 8, 8, 130, 44, 130, 'a', 'b', 'a'];
const obj = {};
arr.forEach(item => {
    // 去重 将数组的每一位元素变为对象的键 重复的键(元素)会被覆盖
    obj[item] = item; // 
})

console.log(Object.keys(obj))