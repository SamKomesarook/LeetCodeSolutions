/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let comps = new Map()
    for(let i=0; i<nums.length; i++){
        if(comps.has(nums[i])){
            return [i, comps.get(nums[i])]
        }else{
            comps.set(target-nums[i], i)
        }
    }
};