// 数组去重
let arr = [1,2,3,5,1,5,9,1,2,8]

let res = arr.reduce((pre,curr) => {
    pre.indexOf(curr) == -1 && pre.push(curr)
    return pre
},[])
console.log(res);


let newArr = []
for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    }
   
}
console.log(newArr);

let newArr1 = []
for (let i = 0; i < arr.length; i++) {
    if (newArr1.indexOf(arr[i]) == -1) {
        newArr1.push(arr[i])
    }
   
}
console.log(newArr1);


let newArr2 = []
for (let i = 0; i < arr.length; i++) {
   let result =  newArr2.find((element) => {
        return element == arr[i]
    })
    if (result == undefined) {
        newArr2.push(arr[i])
    }
}
console.log(newArr2);

let newArr3 = []
let map = {}
for (let i = 0; i < arr.length; i++) {
   if (!map.hasOwnProperty(arr[i])) {
       map[arr[i]] = i
       newArr3.push(arr[i])
   }
}
console.log(newArr3);




