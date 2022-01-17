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
var isCompleteTree = function(root) {
    let arr = [root]
    let nullCheck = false
    while(arr.length !== 0){
        let newArr = []
        for(let elem of arr){
            if(elem.left == null){
                nullCheck = true
            }else{
                if(nullCheck){
                    return false
                }
                newArr.push(elem.left)
            }
            if(elem.right == null){
                nullCheck = true
            }else{
                if(nullCheck){
                    return false
                }
                newArr.push(elem.right)
            }
        }
        arr = newArr
    }
    return true
};