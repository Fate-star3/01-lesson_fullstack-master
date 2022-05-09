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
let hi = obj.hi()
hi() // 外层this指向obj  内层this指向 obj


let sayHi = obj.sayHi()
// obj.sayHi() 是下面代码
// function (){
//     return function () {
//         console.log(this);
//         return () => {
//             console.log(this);
//         }
//     }
// }


let fun1 = sayHi()
// sayHi() 是下面的代码
// function () {
//         console.log(this);
//         return () => {
//             console.log(this);
//         }
//     }


fun1() //  外层this指向window  内层this指向window
// fun1() 是下面的代码
// () => {
//             console.log(this);
//         }


obj.say() //指向window