
function Cat(name , color) {
    return {
        name:name,
        color:color
    }
}
let obj = new Object()
let cat1 = Cat('Tom','黑色')
console.log(cat1.name,cat1.color); //Tom 黑色
console.log(cat1.constructor);//[Function: Object]
console.log(cat1 instanceof Cat);//false