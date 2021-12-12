/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count += parseInt(nums[i])
    }
    if (count % 2 == 0) {
        const target = count / 2
        let additions = [0]
        for (let x = 0; x < nums.length; x++) {
            let toAdd = []
            for(let y = 0; y < additions.length; y++){
                numsElem = nums[x]
                addElem = additions[y]
                if(numsElem + addElem == target){
                    return true
                }
                if(!additions.includes(numsElem + addElem)){
                    toAdd.push(numsElem + addElem)
                }
            }
            additions = additions.concat(toAdd)
        }
    }
    return false
};