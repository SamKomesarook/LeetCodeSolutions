/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let combs = []
    
    let dfs = (index, nums, sum) => {
        if(sum == 0){
            combs.push(nums)
        }
        if(sum <= 0){
            return
        }
        for(let i=index; i<candidates.length; i++){
            dfs(i, nums.concat(candidates[i]), sum-candidates[i])
        }
    }
    
    dfs(0, [], target)
    return combs
};