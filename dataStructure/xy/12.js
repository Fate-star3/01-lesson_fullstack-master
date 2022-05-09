/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // 用空间换时间，减少一重循环
  const diffs = {};
  // 缓存数组的长度
  const len = nums.length;
  // 遍历数组
  for(let i = 0; i < len; i++){
      if(diffs[target-nums[i]] !==undefined){
            console.log(diffs);
          return[diffs[target - nums[i]],i]
      }else{
          diffs[nums[i]] = i;
      }
  }
}
let res = twoSum([2,7,3,4],9)

