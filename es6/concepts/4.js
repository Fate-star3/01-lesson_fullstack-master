let str = 'zs' //js是弱类型高级动态语言 
let obj = {
    name:'zs'
}
obj.sex = '男'

let str2 = str //字符串类型数据存储在栈(stack)中
console.log(str2);
console.log(str);


let obj2 = obj 
obj2.name = '李四'
console.log(obj.name);
