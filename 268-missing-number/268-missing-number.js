/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let total = rTotal = 0
    for(let i=0; i<nums.length; i++){
        total += nums[i]
        rTotal += i
    }
    rTotal += nums.length
    return rTotal - total
};