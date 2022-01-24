/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums = nums.sort((a,b) => a - b)
    let median = nums[Math.floor(nums.length / 2)]
    let count = 0
    for(let i = 0; i<nums.length; i++){
        count += Math.abs(nums[i] - median)
    }
    return count
};