/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let map = new Map()
    for(let elem of allowed){
        map.set(elem, 1)
    }
    let count = 0
    for(let word of words){
        let flag = true
        for(let elem of word){
            if(!map.get(elem)){
                flag = false
                break
            }
        }
        if(flag){
            count++
        }
    }
    return count
};