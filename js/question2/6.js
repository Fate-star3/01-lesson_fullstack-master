let a = ['hello','world']
console.log(Object.keys(a));//[ '0', '1']
console.log(Object.getOwnPropertyNames(a));//[ '0', '1', 'length' ]

// 类型转换
// undefined转换为数值时为NaN null为0
console.log(1 + undefined);//NaN
console.log(1 + null);//1
console.log(isNaN(+'aa'));//true
console.log(1 + '1');
console.log(1 + [4,5,6]);//14,5,6
console.log('a'+ +'b');//14,5,6
console.log(1+{});//1[object Object]
console.log('1'+{});//1[object Object]
console.log(Number.isNaN(+'aa'));//true