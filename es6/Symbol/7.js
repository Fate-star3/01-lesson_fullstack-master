// 引入了第三方包
let lodash = require('lodash')
let spread = [12,5,8,8,130,44,130]
// 调用其中的一个方法去重
console.log(lodash.uniq(spread));
console.log(lodash.size(spread));