/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let smallest = Infinity
    let smallestElem = Infinity
    for(let i=0; i<nums.length; i++){
        let left = i+1
        let right = nums.length - 1
        while(left < right){
            let elem = nums[i] + nums[left] + nums[right]
            let diff = Math.abs(target - elem)
            if(diff < smallest){
                smallestElem = elem
                smallest = diff
            }
            if(elem < target){
                left++
            }else if(elem > target){
                right--
            }else{
                left++
                right--
            }
        } 
    }
    return smallestElem
};