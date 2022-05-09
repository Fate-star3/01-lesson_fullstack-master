// number 类型  但是要排斥掉 NaN 
const isNumber = val => typeof val === 'number' && val === val; 

// console.log(isNumber('2'));  
// 这不是个数字 
console.log(typeof NaN); //NaN 类型还是为 number   
console.log(isNumber(NaN));  //没有
console.log(NaN == NaN);
console.log( 2 == 2);