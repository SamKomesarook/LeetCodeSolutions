/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    for(let i = 0; i<nums.length; i++){
        (map.has(nums[i])) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1)
    }
    return [...map].sort((a, b) => b[1] - a[1]).slice(0,k).map(elem => elem[0])
};