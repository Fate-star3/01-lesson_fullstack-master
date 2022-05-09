// 创建一个单例  就是总是第一个实例
let CreateSingleton = (function() {
    console.log('123');
    console.log(this);
    let instance = null;
    return function(name) {
        if(instance) {//如果之前实例化过，则为true ，返回instance
            return instance
        }
        this.name = name
        console.log(this);
        // this指向构造函数 包含属性方法
        return instance = this
    }
})()

let singleton1 = new CreateSingleton('zs')
console.log(singleton1);//{ name: 'zs' }

let singleton2 = new CreateSingleton('ls')
console.log(singleton2);//{ name: 'zs' }

console.log(singleton1 == singleton2);//true