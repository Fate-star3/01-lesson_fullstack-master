let spread = [12,5,8,8,130,44,130]

let uniqueArr = spread.filter((ele,index,arr) => {
    // 有重复元素的话，会查找前面的重复元素的index  会使下面代码为false
    return arr.indexOf(ele) == index
})
console.log(uniqueArr);

let arr = [1,2,2,3,4,6,4]
let set = new Set(arr)
console.log(set);
console.log(Object.prototype.toString.call(set));//[object Set]
console.log([...set]);//[ 1, 2, 3, 4, 6 ]
set = Array.from(set)
console.log(set);//[ 1, 2, 3, 4, 6 ]
