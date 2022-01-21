/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let globalMax = subMax = nums[0]
    for(let i=1; i<nums.length; i++){
        subMax = Math.max(nums[i], subMax + nums[i])
        globalMax = Math.max(globalMax, subMax)
    }
    return globalMax
};