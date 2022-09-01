/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let map = new Map()
    for(let elem of nums){
        map.set(elem, 1)
    }
    let count = nums.length
    let index = 0
    while(index < nums.length){
        if(map.get(index) == undefined){
            return index
        }
        index++
    }
    return index
};