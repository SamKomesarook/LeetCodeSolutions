/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr = arr.sort((a,b) => a-b)
    let diff = Infinity
    minArr = []
    for(let i=0; i<arr.length-1; i++){
        let elemI = arr[i]
        let elemY = arr[i+1]
        let newDiff = Math.abs(elemI - elemY)
        if(newDiff < diff){
            diff = newDiff
            minArr = [[elemI, elemY]]
        }else if(newDiff == diff){
            minArr.push([elemI, elemY])
        }
    }
    return minArr
};