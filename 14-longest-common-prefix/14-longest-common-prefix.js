/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ""
    let index=0;
    while(true){
        if(index >= strs[0].length){
            return prefix
        }
        let tempChar = strs[0][index]
        for(let i=1; i<strs.length; i++){
            if(index > strs[i].length){
                return prefix
            }
            if(strs[i][index] !== tempChar){
                return prefix
            }
        }
        prefix = prefix.concat(tempChar)
        index++;
    }
    return prefix
};