/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = new Map()
    for(let elem of s){
        if(map.has(elem)){
            map.set(elem, map.get(elem) + 1)
        }else{
            map.set(elem, 1)
        }
    }
    for(let elem of t){
        if(!map.has(elem) || map.get(elem) == 0){
            return elem
        }else{
            map.set(elem, map.get(elem) - 1)
        }
    }
};