/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let arr = []
    let count = 0
    for(let i=0; i<s.length; i++){
        if(s[i] == 1){
            count++
        }else{
            if(count > 0){
                arr.push(count)
                count = 0
            }
        }
    }
    if(count > 0){
        arr.push(count)
    }
    let triangleNumber = (n) => {
        return (n * (n + 1)) / 2;
    }
    let total = 0
    for(let elem of arr){
        total += triangleNumber(elem)
    }
    return total % ((10**9)+7)
};