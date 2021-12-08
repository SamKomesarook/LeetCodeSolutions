/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let window = []
    let lenIndex = s.length - 1
    let endIndex = 0
    let index = 0;
    while(index <= lenIndex){
        window.push(s[index])
        const size = new Set(window).size
        if(size !== window.length){
            window.shift()
        }
        
        index++
    }
    return window.length
};