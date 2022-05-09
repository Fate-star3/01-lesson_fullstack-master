// 怎么创建数组？
// - 数据结构 对于代码的优化是有意义的，
// - 平时开发之中，算法用的少一些
// - 面试？针对面试去学习就可以？
// - 算法 leetcode js
// 基本数据结构 访问第几个元素（行为）时间复杂度O(1)
// const arr = [];// easy way  length没定,items类型也没有定 太随意了
// 使用构造函数， 可不是为了创建空数组这么无聊
// 数组比较好用，相对于链表 默认用数组来实现
// const arr = new Array(7);// <7 empty items>  item类型？
// console.log(arr);
const arr = (new Array(7)).fill(1);
console.log(arr);