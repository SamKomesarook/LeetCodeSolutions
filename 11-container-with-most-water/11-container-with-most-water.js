/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0
    let startIndex = 0
    let endIndex = height.length - 1
    while(startIndex < endIndex){
        let smallest = Math.min(height[startIndex], height[endIndex])
        let potentialArea = smallest * (endIndex - startIndex)
        if(potentialArea > area){
            area = potentialArea
        }
        if(height[startIndex] <= height[endIndex]){
            startIndex++
        }else{
            endIndex--
        }
    }
    return area
};

/*

Given x,y

pos(x) - pox(y) = i
min(x,y) = z
return i*z
*/