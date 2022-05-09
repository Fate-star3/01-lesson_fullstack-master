let str = 'hello world'
console.log(str instanceof String);//false 原始数据类型没有原型

let str1 = new String('hello world')
console.log(str1 instanceof String);//true  是String包装对象