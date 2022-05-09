let s = Symbol(); // 独一无二  
let s2 = Symbol();
console.log(s == s2);

let obj = {
    a: 1,
    [Symbol()]: function(arg) {
        console.log('----')
    },
    [Symbol()]: function(arg) {
        console.log('++++')
    }
}
// console.log(obj);
//  Symbol 作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、
// JSON.stringify()返回。
for (let key in obj) {
    console.log(key);
}
console.log(Object.keys(obj))
console.log(
    Object.getOwnPropertyNames(obj)
)

Object.getOwnPropertySymbols(obj)
    .forEach(item => {
        console.log(item);//Symbol() Symbol()
        obj[item]()//---- ++++
    })

    
// obj.a
// console.log(obj[s2]())