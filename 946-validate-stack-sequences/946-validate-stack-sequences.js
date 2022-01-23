/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [pushed[0]]
    let pushedIndex = 1
    let poppedIndex = 0
    while(pushedIndex < pushed.length && poppedIndex < popped.length){
        if(stack[stack.length - 1] == popped[poppedIndex]){
            stack.pop()
            poppedIndex++
        }else{
            stack.push(pushed[pushedIndex])
            pushedIndex++
        }
    }
    while(stack.length >= 1){
        if(poppedIndex >= popped.length || stack.pop() !== popped[poppedIndex]){
            return false
        }
        poppedIndex++
    }
    return true
};