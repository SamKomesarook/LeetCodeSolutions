/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let count = 0
    let final = ""
    let subStr = ""
    for(let i=0; i<s.length; i++){
        if(s[i] == "("){
            count++
            subStr = subStr.concat('(')
        }
        if(s[i] == ")"){
            count--
            subStr = subStr.concat(')')
        }
        if(count == 0){
            final = final.concat(subStr.slice(1,subStr.length - 1))
            subStr = ""
        }
    }
    return final
};