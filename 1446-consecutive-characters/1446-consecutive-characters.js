/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let longestStreak = 0
    let newStreak = 1
    for(let i = 0; i<s.length; i++){
        if(s[i] === s[i-1]){
            newStreak++
        }else{
            if(newStreak > longestStreak){
                longestStreak = newStreak
            }
            newStreak = 1
        }
    }
    if(newStreak > longestStreak){
        return newStreak
    }
    return longestStreak
};