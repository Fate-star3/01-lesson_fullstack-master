const obj = {
    name : '杨仲鑫',
    food: '甜品'
}
// const food = obj.food;
// es6 提供了优雅的api 解构
let { name, food } = obj;
console.log(name, food);
// let name = '123';
// var a = 1;
// var a = 2;

function introduct(name, food) {
    console.log(`${name}, 旅梦的好朋友， 大佬， 最喜欢的食物是${food}`);
}

introduct(obj.name, obj.food);
