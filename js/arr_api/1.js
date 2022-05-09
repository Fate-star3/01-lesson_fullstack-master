// 1.数组和对象，类型都是object，除了简单数据类型，其他都是对象
// 2.他们都是数据容器
// 3.区别：数组使用整数做索引，对象是用属性值(字符串类型)做下标 键值对类型
let arr = [1,2,3,4,5]
let obj = {
    name:'张三',
    sex:'nan',
    hometown:'南昌',
    hobbies:['打球','唱','跳']
}
console.log(Object.prototype.toString.call(arr));

// Array.prototype.foo = function () {
//     console.log('123');
// }
// for (const index in arr) {
//     console.log(index);
//     console.log(arr[index]);
//     // for in 循环会把数组的原型上的方法也遍历出来
// }
for (const item of arr.keys()) {
        console.log(item);//输入元素的索引
}
for (const value of arr.values()) {
    console.log(value);//输出元素的值
}
for (const [ele,val] of arr.entries()) {
    console.log(ele,val);//同时输出元素的索引和值
}