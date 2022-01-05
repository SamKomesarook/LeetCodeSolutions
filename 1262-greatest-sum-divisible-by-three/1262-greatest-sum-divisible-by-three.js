/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    if(nums.length == 1){
        return nums[0] % 3 == 0 ? nums[0] : 0
    }
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    if (total % 3 == 0) {
        return total
    }
    let temps = new Set()
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        let numsElem = nums[i]
        if (numsElem % 3 == 0) {
            continue
        }
        let diff = total - numsElem
        if (diff % 3 == 0) {
            if (max < diff) {
                max = diff
            }
        } else { 
            let sideTemps = new Set()
            for (let tempElem of temps){
                if(tempElem <= numsElem){
                    continue
                }
                if((tempElem - numsElem) % 3 == 0 && tempElem - numsElem > max){
                    max = tempElem - numsElem
                }else{
                    if(!temps.has(tempElem - numsElem) && tempElem - numsElem > max){
                        sideTemps.add(tempElem - numsElem)                        
                    }
                }
            }
            temps = new Set([...temps, ...sideTemps, diff])
        }
    }
    return max
};