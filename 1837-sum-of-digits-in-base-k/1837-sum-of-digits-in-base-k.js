/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let total = 0
    n = n.toString(k)
    for(let elem of n){
        total += parseInt(elem)
    }
    return total
};