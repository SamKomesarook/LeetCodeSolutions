/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let max = Math.max(...weights) * weights.length
    let min = Math.max(...weights)
    while(min < max - 1){
        let val = Math.ceil((max + min) / 2)
        if(valid(val, weights, days)){
            max = val
        }else{
            min = val
        }
    }
    if(valid(min,weights,days)){
        return min
    }
    return max
};

let valid = (num, weights, days) => {
    let index = 0
    let subCount = num
    while(index < weights.length){
        if(subCount - weights[index] >= 0){
            subCount -= weights[index]
            index++
        }else{
            subCount = num
            days--
            if(days == 0){
                return false
            }  
        }   
    }
    return true
}