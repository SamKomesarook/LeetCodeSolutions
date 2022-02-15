/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let groups = []
    let map = new Map()
    for(let i=0; i<groupSizes.length; i++){
        if(map.has(groupSizes[i])){
            if(map.get(groupSizes[i]).length == groupSizes[i] - 1){
                groups.push([i,...map.get(groupSizes[i])])
                map.delete(groupSizes[i])
            }else{
                map.set(groupSizes[i], [i,...map.get(groupSizes[i])])
            }
        }else{
            if(groupSizes[i] == 1){
                groups.push([i])
            }else{
                map.set(groupSizes[i], [i])
            }
        }
    }
    return groups
};