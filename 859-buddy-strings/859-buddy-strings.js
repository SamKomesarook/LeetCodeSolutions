/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length){
        return false
    }
    if(s == goal){
        let set = new Set()
        for(let elem of s){
            if(set.has(elem)){
                return true
            }
            set.add(elem)
        }
        return false
    }
    let elems = []
    for(let i=0; i<s.length; i++){
        if(s[i] !== goal[i]){
            elems.push(i)
        }
    }
    return elems.length == 2 && s[elems[0]] == goal[elems[1]] && s[elems[1]] == goal[elems[0]]
};