/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set = new Set()
    for(let elem of nums){
        if(set.has(elem)){
            set.delete(elem)
        }else{
            set.add(elem)
        }
    }
    return(Array.from(set)[0])
};