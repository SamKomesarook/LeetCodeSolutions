/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if(matchsticks.length < 4){
        return false
    }
    let sum = 0
    for(let i=0; i<matchsticks.length; i++){
        sum+=matchsticks[i]
    }
    let side = sum / 4
    if(side % 1 !== 0){
        return false
    }
    matchsticks = matchsticks.sort((a,b) => b-a)
    if(matchsticks[0] > side){
        return false
    }
    let arr = new Array(4).fill(side)
        
    let recurse = (index) => {
        if(index == matchsticks.length){
            return true
        }
        for(let i=0; i<4; i++){
            if(arr[i] - matchsticks[index] >= 0){
                arr[i] -= matchsticks[index]
                if(recurse(index+1)){
                    return true
                }
                arr[i] += matchsticks[index]
            }
        }
        return false
    }
    
    return recurse(0)
};