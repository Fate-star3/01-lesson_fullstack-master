function sayHi() {
    console.log('Hello,', this.name);
}

var person2 = {
    name: 'Christina',
    sayHi: sayHi
}

var person1 = {
    name: 'YvetteLau',
    friend: person2
}
// 你不知道的javascript 
// 当函数做为对象的方法时， this指向对象， 当前对象是 person2
var obj = person1.friend;
obj.sayHi();
// person1.friend.sayHi();