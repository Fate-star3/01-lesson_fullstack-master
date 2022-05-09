//编写一个函数，接收由一个由10个整数组成的数组（0-9）
//返回类似于格式是 (123) 456-7890 的电话号码字符串
// function createPhoneNumber(numbers){
//     //字符串模板解法
//     return`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
// }
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));//(123) 456-7890

function createPhoneNumber(numbers){
        numbers=numbers.join('');
        return`(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`
    }
    console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));