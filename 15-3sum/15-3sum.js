/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arrs = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if(i > 0 && nums[i] == nums[i-1]){
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            let total = nums[i] + nums[left] + nums[right]
            if (total == 0) {
                arrs.push([nums[i], nums[left], nums[right]])
                left++
                while(nums[left] == nums[left-1] && left < right){
                    left++
                }
            } else if (total < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return arrs
};