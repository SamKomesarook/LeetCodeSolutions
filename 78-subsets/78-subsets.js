/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let sets = [[]]
    for(let elem of nums){
        let newSets = []
        for(let set of sets){
            newSets.push([elem,...set])
        }
        sets.push(...newSets)
    }
    return sets
};