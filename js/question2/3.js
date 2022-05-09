let a = '1'
console.log(a.toString());
console.log(typeof a);//string
console.log(typeof '1');//string

// 原始包装对象
let b = new String('1')
console.log(b.toString());
console.log(typeof b);//object

console.log(typeof null);//object
// 为什么 typeof null 为 object 呢？
// 第一版的JavaScript是用32位比特来存储值的，且是通过值的低1位或3位来识别类型的。
// 1：整型（int）
// 000：引用类型（object）
// 010：双精度浮点型（double）
// 100：字符串（string）
// 110：布尔型（boolean）
// 另外还用两个特殊值：

// undefined，用整数−2^30（负2的30次方，不在整型的范围内）
// null，机器码空指针（C/C++ 宏定义），低三位也是000
// 所以 typeof null 结果就是 object