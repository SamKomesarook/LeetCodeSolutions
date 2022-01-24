/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if (nums.length / k % 1 !== 0) {
        return false
    }
    let map = new Map()
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    while (map.size > 0) {
        for (let i = min; i < min+k; i++) {
            if (!map.has(i)) {
                return false
            } else {
                if (map.get(i) == 1) {
                    map.delete(i)
                } else {
                    map.set(i, map.get(i) - 1)
                }
            }
        }
        min = Infinity
        for (let key of map.keys()) {
            if (key < min) {
                min = key;
            }
        };
    }
    return true
};

