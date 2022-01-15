/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let vals = []
    let y = 0
    let x = 0
    let dir = 0
    while(true){
        vals.push(mat[y][x])
        if(y == mat.length - 1 && x == mat[0].length - 1){
            break
        }
        if(dir == 0){
            if(y == 0 && x < mat[0].length - 1){
                x++
                dir = 1
            }else if(x == mat[0].length - 1){
                y++
                dir = 1
            }else{
                x++
                y--
            }
        }else{
            if(x == 0 && y < mat.length - 1){
                y++
                dir = 0
            }else if(y == mat.length - 1){
                x++
                dir = 0
            }else{
                y++
                x--
            }
        }
    }
    return vals
};