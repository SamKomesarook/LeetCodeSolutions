/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let count = 0
    let stack = [s[0]]
    for(let i=1; i<s.length; i++){
        if(stack.length > 0 && stack[stack.length-1] == '(' && s[i] == ')'){
            stack.pop()
        }else{
            stack.push(s[i])
        }
    }
    return stack.length
};