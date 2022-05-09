//类型转换 前提是针对简单类型
console.log(0 == 0);
console.log(-0 == +0);
console.log(-0 === +0);
console.log(1 == '1');//判断相等的同时，先去做了类型的转换
console.log(1 === '1');//false 不会去做类型转换
console.log(1 == true);//谁转谁？数值优先
console.log(0 == false);
if(3){
    console.log('------');
}
console.log(null == undefined);//两边同时转类型
console.log(null === undefined);
console.log({} == {});//false 这是复杂数据类型