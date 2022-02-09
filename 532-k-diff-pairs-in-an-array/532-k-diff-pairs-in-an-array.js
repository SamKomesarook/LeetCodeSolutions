/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let map = new Map()
    for(let elem of nums){
        if(map.has(elem)){
            map.set(elem, map.get(elem) + 1)
        }else{
            map.set(elem, 1)
        }
    }
    let count = 0
    for(let key of map.keys()){
        if(k == 0){
            if(map.get(key) >= 2){
                count++
            }
        }else{
            if(map.has(key + k)){
                count++
            }
        }
    }
    return count
};