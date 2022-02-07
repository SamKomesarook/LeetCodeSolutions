/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let str = translate(pattern)
    let res = []
    for(let elem of words){
        if(translate(elem) == str){
            res.push(elem)
        }
    }
    return res
};

let translate = (str) => {
    let index = 0
    let map = new Map()
    let trs = ""
    for(let elem of str){
        if(!map.has(elem)){
            map.set(elem, index)
            index++
        }
        trs += String(map.get(elem))
    }
    return trs
}