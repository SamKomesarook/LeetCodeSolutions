/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let pairs = 0
    for (let i = 0; i < time.length; i++) {
        for (let y = i + 1; y < time.length; y++) {
            if ((time[i] + time[y]) % 60 == 0) {
                pairs++
            }
        }
    }
    return pairs
};