// 函数是按值传递的 函数的形参是局部变量
function test(person) {
    // 这样写不会影响
    let obj = {
        ...person
    }
    obj.age = 26
    obj.hobbies[0] = 10
    // let obj = Object.assign({}, person)
    // obj.age = 26

    // 会影响外面的person1对象
    // person.age = 26
    // 当person对象在函数内部被重写时，原始的引用没变 它变成了一个指向本地对象的指针，会在函数结束后就会销毁！
    person = {
        name: 'zs',
        age: 30,
        hobbies:[1,2,3]
    }
    return person
}

let person1 = {
    name: "张三",
    age: 20,
    hobbies:[1,2,3]
}

let p1 = test(person1)
console.log(p1);//{ name: 'zs', age: 30, hobbies: [ 1, 2, 3 ] }
console.log(person1);//{ name: '张三', age: 26, hobbies: [ 10, 2, 3 ] }
console.log(person1);//{ name: '张三', age: 20, hobbies: [ 10, 2, 3 ] } 修改后person1不会被修改 但只是浅拷贝
