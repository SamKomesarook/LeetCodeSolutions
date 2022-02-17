/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
    let onesCount = 0
    for(let elem of nums){
        if(elem == 1){
            onesCount++
        }
    }
    
    let zeroCount = 0
    let indices = []
    let maxScore = onesCount + zeroCount
    for(let i=0; i<=nums.length; i++){
        let elem = onesCount + zeroCount
        if(elem > maxScore){
            maxScore = elem
            indices = [i]
        }else if(elem == maxScore){
            indices.push(i)
        }
        if(nums[i] == 0){
            zeroCount++
        }else{
            onesCount--
        }
    }
    return indices
};