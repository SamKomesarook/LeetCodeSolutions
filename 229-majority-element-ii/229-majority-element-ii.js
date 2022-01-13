/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = new Map()
    for(let num of nums){
        if(map.has(num)){
            map.set(num, map.get(num) + 1)
        }else{
            map.set(num, 1)
        }
    }
    let passedNums = []
    for(let [key, value] of map){
        if(value > nums.length/3){
            passedNums.push(key)
        }
    }
    return passedNums
};