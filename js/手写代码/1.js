function Dog() {

}
function Cat() {

}
// Dog.prototype.sayHi = function() {

// }
Object.assign(Dog.prototype,{
    sayHi(){
        console.log('hi');
    }
})
const dog = new Dog()
console.log(dog instanceof Dog); //true
console.log(dog instanceof Object); //true
// console.log(dog instanceof null); //Right-hand side of 'instanceof' is not an object
console.log(dog instanceof Cat); //Right-hand side of 'instanceof' is not an object

dog.sayHi()