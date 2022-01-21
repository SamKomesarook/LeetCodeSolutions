/**
 * @param {number[]} nums
 * @return {number[]}
 */

// constant space

var productExceptSelf = function(nums) {
    let left = []
    let prod = 1
    for(let i=0; i<nums.length; i++){
        left.push(prod)
        prod *= nums[i]
    }
    prod = 1
    for(let i=nums.length - 1; i>=0; i--){
        left[i] *= prod
        prod *= nums[i]
    }
    return left
}