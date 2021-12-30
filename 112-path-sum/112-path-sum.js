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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root == null){
        return false
    }
    if(targetSum - root.val == 0 && root.right == null && root.left == null){
        return true
    }else{
        let checkLeft = false
        let checkRight = false
        if(root.right !== null && hasPathSum(root.right, targetSum - root.val) ){
            return true
        }
        if(root.left !== null && hasPathSum(root.left, targetSum - root.val) ){
            return true
        }
        return false
    }
};