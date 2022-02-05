/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let twoSum = (nums, target) => {
        let res = []
        let left = 0
        let right = nums.length - 1
        while(left < right){
            let total = nums[left] + nums[right]
            if(total > target || (right < nums.length - 1 && nums[right] == nums[right + 1])){
                right--
            }else if(total < target || (left > 0 && nums[left] == nums[left - 1])){
                left++
            }else{
                res.push([nums[left], nums[right]])
                left++
                right--
            }
        }
        return res
    }
    
    let kSum = (nums, k, target) => {
        let res = []
        if(nums.length == 0){
            return res
        }
        let average = Math.floor(target/k)
        if(nums[0] > average || nums[nums.length - 1] < average){
            return res
        }
        if(k == 2){
            return twoSum(nums, target)
        }
        for(let i=0; i<nums.length; i++){
            if(i == 0 || nums[i] !== nums[i-1]){
                for(let elem of kSum(nums.slice(i+1),k-1,target - nums[i])){
                    res.push([nums[i],...elem])
                }
            }
        }
        return res
    }
    nums.sort((a,b) => a-b)
    return kSum(nums, 4, target)
};