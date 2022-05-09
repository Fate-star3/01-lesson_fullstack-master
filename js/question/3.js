var obj = {
    hi() {
        console.log(this);
        return () => {
            console.log(this);
        }
    },
    sayHi() {
        return function () {
            console.log(this);
            return () => {
                console.log(this);
            }
        }
    },
    say: () => {
        console.log(this);
    }
}
let sayHi = obj.sayHi()
let fun1 = sayHi()
fun1()// 外层this指向window  内层this指向window
let fun2 = sayHi.bind(obj)()
fun2() // 外层this指向obj  内层this指向 obj