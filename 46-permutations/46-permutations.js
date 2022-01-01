/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length == 1){
        return [nums]
    }
    let elems = permute(nums.slice(1))
    let newElems = []
    for(let i=0; i<elems.length; i++){
        for(let y=0; y<elems[i].length+1; y++){
            newElems.push([...elems[i].slice(0,y), nums[0], ...elems[i].slice(y)])
        }
    }
    return newElems
};