/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let prod = 1
    for(let elem of String(n)){
        let parsedElem = parseInt(elem)
        sum += parsedElem
        prod *= parsedElem
    }
    return prod-sum
};