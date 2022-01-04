/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let max = 0
    for(let i=0; i<arr1.length; i++){
        for(let y=i; y<arr1.length; y++){
            let total = Math.abs(arr1[i] - arr1[y]) + Math.abs(arr2[i] - arr2[y]) + Math.abs(i - y)
            if(total > max){
                max = total
            }
        }
    }
    return max
};