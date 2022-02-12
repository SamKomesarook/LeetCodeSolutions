/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map()
    for(let elem of s1){
        if(map.has(elem)){
            map.set(elem, map.get(elem) + 1)
        }else{
            map.set(elem, 1)
        }
    }
    for(let i=0; i<s2.length; i++){
        if(map.has(s2[i])){
            let subMap = new Map(map)
            let subIndex = i
            while(subMap.has(s2[subIndex])){
                if(subMap.get(s2[subIndex]) == 1){
                    subMap.delete(s2[subIndex])
                }else{
                    subMap.set(s2[subIndex], subMap.get(s2[subIndex]) - 1)
                }
                subIndex++
            }
            if(subMap.size == 0){
                return true
            }
        }
    }
    return false
};