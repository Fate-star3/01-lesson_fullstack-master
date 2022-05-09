var str = '123abc456wer';
//正则表达式
//匹配内容
console.log(/[a-z]+/.test(str)); 
console.log(str.match(/[a-z]/));
//+表示贪婪匹配
console.log(str.match(/[a-z]+/));
//匹配尾部
console.log(str.match(/[a-z]+$/));
//不停的匹配
console.log(str.match(/[a-z]+/g));
//replace函数 用----替换abc
console.log(str.replace(/[a-z]+/,'----'));

console.log(str.replace(/([0-9]+)([a-z]+)/g, function(){
    console.log(arguments);
}));