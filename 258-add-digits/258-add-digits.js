/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let total = 10
    while(total > 9){
        total = 0
        for(let elem of String(num)){
            total += parseInt(elem)
        }
        num = total
    }
    return total
};