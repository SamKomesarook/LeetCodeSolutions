/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let countMap = new Map()
  let count = 0
  countMap.set(0,-1)
  let largest = 0
  for(let i=0; i<nums.length; i++){
      if(nums[i] == 0){
          count--
      }else{
          count++
      }
      if(countMap.has(count)){
          largest = Math.max(largest, i-countMap.get(count))
      }else{
          countMap.set(count, i)
      }
  }
    return largest
};