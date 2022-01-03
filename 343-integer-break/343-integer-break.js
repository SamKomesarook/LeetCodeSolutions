/**
 * @param {number} n
 * @return {number}
 */

var integerBreak = function(n) {
    if(n == 2){
        return 1
    }
    if(n == 3){
        return 2
    }
    return recurse(n)
};

let recurse = (n) => {
    if(n == 2){
        return 2
    }
    if(n == 3){
        return 3
    }
    if(n == 4){
        return 4
    }
    return 3 * recurse(n - 3)
}