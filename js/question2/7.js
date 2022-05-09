let obj = {
    value:1,
    valueOf() {
        return 1
    }
}
// 对象转换为数值，先调用valueOf方法，如果返回值是原始数据类型就直接返回，如果还是对象，就调用toString方法，如果返回值是
// 原始数据类型，就直接使用Number方法，如果还是对象，就报错
console.log(obj == 1);//true