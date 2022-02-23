/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function(nums, start, goal) {
    let set = new Set()
    let count = 0
    
    let toExplore = new Set()
    toExplore.add(start)
    while(toExplore.size > 0){
        let newSet = new Set()
        for(let elem of toExplore.values()){
            if(elem == goal){
                return count
            }
            if(set.has(elem) || elem < 0 || elem > 1000){
                continue
            }
            set.add(elem)
            for(let num of nums){
                newSet.add(elem - num)
                newSet.add(elem + num)
                newSet.add(elem ^ num)
            }
        }
        toExplore = newSet
        count++
    }
    return -1
};