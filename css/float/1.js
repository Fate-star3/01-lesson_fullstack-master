// 很大的数值 超出计算范围
let a = 1234678946565656565656565656565588878788n
// console.log(a + 1);// Cannot mix BigInt and other types, use explicit conversions 不能混合BigInt和其他类型，使用显式转换
console.log(0.1 + 0.2);//0.30000000000000004
console.log(typeof a);//bigint

let b = BigInt('111111111111111111111111122222222222222222333333333333333')
console.log(b);//111111111111111111111111122222222222222222333333333333333n
console.log(a + b);//111111111111111112345790068787878787878787989898922212121n

console.log(1n + 2n); //3n
console.log(5n / 2n);
// console.log( 5n + 1); //不能混合BigInt和其他类型，使用显式转换
console.log(5n + BigInt(1)); //6n

console.log(String([1]) + 1);
console.log([] + '10');
console.log(2+ [1,2,3]); //21,2,3
console.log(Number(undefined));//NaN