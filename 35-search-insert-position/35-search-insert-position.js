/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return recurse(nums, target, 0)
};

let recurse = (nums, target, smallIndex) => {
    if (nums.length == 1) {
        if (nums[0] < target) {
            return smallIndex + 1
        } else {
            return smallIndex
        }
    } else {
        if (nums[Math.ceil(nums.length / 2)] > target) {
            return recurse(nums.slice(0, Math.ceil(nums.length / 2)), target, smallIndex)
        } else if (nums[Math.ceil(nums.length / 2)] < target) {
            return recurse(nums.slice(Math.ceil(nums.length / 2) + 1), target, smallIndex + Math.ceil(nums.length / 2) + 1)
        } else {
            return smallIndex + Math.ceil(nums.length / 2)
        }
    }
}