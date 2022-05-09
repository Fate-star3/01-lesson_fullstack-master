console.log(this);
function Dog(type,color) {
    
    console.log(this);//指向Dog
    this.type = type
}
// 对象都有this
// this是一个指针，和运行方式相关
// Dog() //普通函数？
let dog = new Dog('大白') //this指向 实例化后的对象 
console.log(dog.type);