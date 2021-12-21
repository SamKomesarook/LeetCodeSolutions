/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 1){
        return true
    }
    let x = 1
    while(true){
        x = x * 2
        if(x > n){
            return false
        }
        if(x == n){
            return true
        }
    }
};