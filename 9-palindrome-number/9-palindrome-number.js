/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false
    }
    let num = String(x)
    const len = num.length
    if(len === 1){
        return true
    }
    let stack = []
    if(len % 2 !== 0){
        const median = Math.ceil(len /2)
        num = num.slice(0, median-1) + num.slice(median);
    } 
    console.log(num)
    for(var i = 0; i<len; i++){
        if(i<Math.floor(len/2)){
            stack.push(num[i])
        }else{
            if(num[i] != stack.pop()){
                return false
            }
        }
    }
    return true
};