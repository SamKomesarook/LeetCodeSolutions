/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let elem of nums){
        if(set.has(elem)){
            return true
        }
        set.add(elem)
    }
    return false
};