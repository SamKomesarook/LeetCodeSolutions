/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let map = new Map()
    for(let i=0; i<mat.length; i++){
        for(let y=0; y<mat[i].length; y++){
            map.set(y-i, map.get(y-i) !== undefined ? map.get(y-i).concat(mat[i][y]) : [mat[i][y]])
        }
    }
    for(let elem of map.keys()){
        map.set(elem, map.get(elem).sort((a,b) => a-b))
    }
    for(let i=0; i<mat.length; i++){
        for(let y=0; y<mat[i].length; y++){
            mat[i][y] = map.get(y-i)[0]
            map.set(y-i, map.get(y-i).slice(1))
        }
    }
    return mat
};