/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cur = null
    let count = 0
    let curIndex = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i] == cur){
            count++
        }else{
            count = 1
            cur = nums[i]
        }
        nums[curIndex] = nums[i]
        if(count <= 2){
            curIndex++
        }
    }
    return curIndex
};