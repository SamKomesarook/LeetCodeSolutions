/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let set = new Set()
    for(let num of nums){
        set.add(parseInt(num, 2))
    }
    for(let i=0; i<=nums.length; i++){
        if(!set.has(i)){
            return (String(0).padStart(nums.length,0) + i.toString(2)).substr(nums.length * -1)
        }
    }
};

