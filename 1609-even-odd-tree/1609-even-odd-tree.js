/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    let index = 0
    let stack = [root]
    while(stack.length > 0){
        let newStack = []
        if(index % 2 == 0){
            let lastVal = 0
            for(let elem of stack){
                if(elem.val % 2 == 0){
                    return false
                }
                if(elem.val <= lastVal){
                    return false
                }
                lastVal = elem.val
                if(elem.left !== null){
                    newStack.push(elem.left)
                }
                if(elem.right !== null){
                    newStack.push(elem.right)
                }
            }
        }else{
            let lastVal = Infinity
            for(let elem of stack){
                if(elem.val % 2 !== 0){
                    return false
                }
                if(elem.val >= lastVal){
                    return false
                }
                lastVal = elem.val
                if(elem.left !== null){
                    newStack.push(elem.left)
                }
                if(elem.right !== null){
                    newStack.push(elem.right)
                }
            }
        }
        stack = newStack
        index++
    }
    return true
};