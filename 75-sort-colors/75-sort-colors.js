/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0
    let white = 0
    let blue = nums.length - 1
    while(nums[red] == 0){
        red++
        white++
    }
    while(nums[blue] == 2){
        blue--
    }
    while(white <= blue){
        switch(nums[white]){
            case 2:
                nums[white] = nums[blue]
                nums[blue] = 2
                blue--
                break
            case 0:
                nums[white] = nums[red]
                nums[red] = 0
                red++
                white++
                break
            default:
                white++
                break
        }
    }
    return nums
};