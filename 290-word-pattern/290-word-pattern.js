/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map()
    let set = new Set()
    s = s.split(" ")
    if(s.length !== pattern.length){
        return false
    }
    for(let i=0; i<s.length; i++){
        if(map.has(pattern[i])){
            if(map.get(pattern[i]) !== s[i]){
                return false
            }
        }else{
            if(set.has(s[i])){
                return false
            }
            set.add(s[i])
            map.set(pattern[i], s[i])
        }
    }
    return true
};