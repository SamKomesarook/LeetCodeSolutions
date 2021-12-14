/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i=0; i<matrix.length; i++){
        for(let y=i; y<matrix.length; y++){
            let temp = matrix[i][y]
            matrix[i][y] = matrix[y][i]
            matrix[y][i] = temp
        }
    }
    for(let i=0; i<matrix.length; i++){
        for(let y=0; y<matrix.length/2; y++){
            let temp = matrix[i][y]
            matrix[i][y] = matrix[i][matrix.length-1-y]
            matrix[i][matrix.length-1-y] = temp
        }
    }
    return matrix
};