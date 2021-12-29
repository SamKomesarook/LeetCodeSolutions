/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if(nums.length == 1){
        return [nums]
    }
    let newArr = permuteUnique(nums.slice(1))
    let finalArrs = []
    for(let i=0; i<newArr.length; i++){
        let len = newArr[i].length
        let elem = newArr[i]
        for(let y=0; y <= len; y++){
            let newElem = [...elem.slice(0,y), nums[0], ...elem.slice(y)]
            if(JSON.stringify(finalArrs).indexOf(JSON.stringify(newElem)) === -1){
                finalArrs.push(newElem)
            }
        }
        
    }
    return finalArrs
};