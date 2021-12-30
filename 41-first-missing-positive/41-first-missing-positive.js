/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = nums.sort((a,b) => a - b)
    let i = 0
    let bottom = 1
    for(; i<nums.length; i++){
        if(nums[i] <= 0 || nums[i] === nums[i+1]){
            continue
        }
        if(nums[i] !== bottom){
            return bottom
        }
        bottom++
    }
    return bottom
};