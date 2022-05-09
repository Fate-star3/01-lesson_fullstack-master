// 1. 简单数据类型  除了null 之外 结果靠谱  
    // null? 原因   js  一致有的bug   
    // 32位  二进制  +1 -1  值 ，拿出一位  1 负， 0 正  符号位   
    // 'a' 二进制  ascill  65 -> 10 -> 二进制  拿出3位来表示  类型  
    // null  类型前三位  000  
    // object 类型前三位  000   
    // typeof  
// console.log(typeof null);  // null 简单    object
// console.log(typeof 1 , typeof 'ss' , typeof undefined , typeof false);    
// 判断一个变量是null  
const isUndefined  = val => {
    console.log(val === 'undefined');
    console.log(typeof val === 'undefined');
    // typeof 操作符返回一个字符串，表示未经计算的操作数的类型。
    // 这里是先对val进行类型分析，然后与'undefined'进行全等比较
    console.log(false);
    console.log(true);
};
const isNull = val => val === null;    
const isNil =  val => val === undefined || val === null ; 

// 相同点？
let a;   

let b = null;
console.log(a || b ); //null  
console.log(isUndefined(a));//true  返回boolean
console.log(isNull(b));//true