/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map = new Map()
    for(let elem of s){
        map.set(elem, map.get(elem) + 1 || 1)
    }
    for(let elem of t){
        if(map.has(elem)){
            map.set(elem, map.get(elem) - 1)
        }
    }
    let count = 0
    for(let key of map.keys()){
        if(map.get(key) > 0){
            count += map.get(key)
        }
    }
    return count
};