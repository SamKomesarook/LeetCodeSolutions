/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    let even = 0;
    let odd = 0;
    for(let i =0;i<n;i++){
        if(i%2 == 0){
            even += nums[i];
            even = even > odd ? even : odd;
        }
        else{
            odd += nums[i];
            odd = even > odd ? even : odd;
        }     
    }
    return even > odd ? even : odd;
};