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
var isSymmetric = function(root) {
    let toCheckRight = [root.right]
    let toCheckLeft = [root.left]
    while(toCheckRight.length !== 0){
        let rightElem = toCheckRight[0]
        toCheckRight = toCheckRight.slice(1)
        let leftElem = toCheckLeft[0]
        toCheckLeft = toCheckLeft.slice(1)
        if(rightElem == null || leftElem == null){
            if(rightElem == null && leftElem == null){
                continue
            }else{
                return false
            }
        }
        if(rightElem.val !== leftElem.val){
            return false
        }
        toCheckRight.push(rightElem.left)
        toCheckLeft.push(leftElem.right)
        toCheckRight.push(rightElem.right)
        toCheckLeft.push(leftElem.left)
    }
    return true
};

