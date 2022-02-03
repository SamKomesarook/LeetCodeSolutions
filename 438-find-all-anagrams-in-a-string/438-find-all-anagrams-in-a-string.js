/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let map = new Map()
    for(let elem of p){
        if(map.has(elem)){
            map.set(elem, map.get(elem) + 1)
        }else{
            map.set(elem, 1)   
        }
    }
    let subMap = new Map()
    
    let mapEquals = () => {
        if(map.size !== subMap.size){
            return false
        }
        for(let key of map.keys()){
            if(map.get(key) !== subMap.get(key)){
                return false
            }
        }
        return true
    }
    
    let count = []
    for(let i=0; i<s.length; i++){
        if(subMap.has(s[i])){
            subMap.set(s[i], subMap.get(s[i]) + 1)
        }else{
            subMap.set(s[i], 1)
        }
        if(i >= p.length - 1){
            if(mapEquals()){
                count.push(i - p.length + 1)
            }
            if(subMap.get(s[i-p.length + 1]) == 1){
                subMap.delete(s[i-p.length + 1])   
            }else{
                subMap.set(s[i-p.length+1], subMap.get(s[i-p.length+1]) - 1)
            }
        }
    }
    return count
};