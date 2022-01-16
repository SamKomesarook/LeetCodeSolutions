/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let nums = triangle[triangle.length - 1]
    for(let i = triangle.length - 2; i >= 0; i--){
        for(let y = 0; y <= i; y++){
            nums[y] = triangle[i][y] + Math.min(nums[y], nums[y+1])
        }
    }
    return nums[0]
};