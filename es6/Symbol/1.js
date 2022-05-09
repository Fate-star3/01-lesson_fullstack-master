let s1 = Symbol()
console.log(typeof s1);//symbol
let s2 = Symbol()
console.log(s1 == s2);//false


let exp = require('./2')
let newObj = {
    name:'ls',
    ...exp
}
console.log(newObj);//{ name: 'zs', age: 18 }  name被重写了
