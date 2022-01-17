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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    if(root == null){
        return null
    }
    recurse(root,0)
    return root
};

let recurse = (root, val) => {
    if(root.right !== null){
        val = recurse(root.right, val)
    }
    val += root.val
    root.val = val
    if(root.left !== null){
        val = recurse(root.left, val)
    }
    return val
}