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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null){
        return []
    }
    let vals = []
    let nodes = [root]
    while(nodes.length > 0){
        let newNodes = []
        let newVals = []
        for(let elem of nodes){
            newVals.push(elem.val)
            if(elem.left){
                newNodes.push(elem.left)
            }
            if(elem.right){
                newNodes.push(elem.right)
            }
        }
        nodes = newNodes
        vals.push(newVals)
    }
    return vals
};