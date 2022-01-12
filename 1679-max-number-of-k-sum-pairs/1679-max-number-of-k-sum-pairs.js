/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let map = new Map()
    let count = 0
    for(let elem of nums){
        if(k > elem){
            if(!map.get(k - elem) > 0){
                if(map.has(elem)){
                    map.set(elem, map.get(elem) + 1)
                }else{
                    map.set(elem, 1)
                }
            }else{
                count++
                map.set(k - elem, map.get(k - elem) - 1)
            }
        }
    }
    return count
};