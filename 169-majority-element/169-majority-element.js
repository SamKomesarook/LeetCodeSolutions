/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map()
    let largest = 0
    let largestVal = 0
    for(let i=0; i<nums.length; i++){
        let elem = nums[i]
        map.set(elem, map.get(elem) + 1 || 1)
        if(map.get(elem) > largest){
            largest = map.get(elem)
            largestVal = elem
        }
    }
    return largestVal
};