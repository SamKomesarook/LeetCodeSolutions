/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let curMax = curMin = 1
    let res = nums[0]
    for(let elem of nums){
        let vals = [elem, elem*curMax, elem*curMin]
        curMax = Math.max(...vals)
        curMin = Math.min(...vals)
        res = Math.max(res, curMax)
    }
    return res
};