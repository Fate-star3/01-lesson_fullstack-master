// 数组在leetcode里面的题目 
// 数组相关，算法？排序（冒泡 两层for循环，插入），二分算法（有效的提升效率），动态规划
// 冒泡 暴力解决    两重for循环

// 1. 基本思路？ 两层循环
// 2. 反思？
// 算法超时? O(n^2)  直觉？  用空间（软盘？廉价）换时间， 把它优化成一层循环
nums = [2, 7, 11, 15]
const target = 9;
let obj = {};
for (let i = 0; i < nums.length; i++) {
    // nums[i] 2 7 11 15  停下来？
    // target nums[i] + obj val = target
    // 差的算法
    // target - nums[i]  -> object 里面 -> 2?
    // 下标 i
}