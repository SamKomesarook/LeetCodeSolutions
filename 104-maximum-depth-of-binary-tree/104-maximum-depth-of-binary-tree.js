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
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null){
        return 0
    }
    let count = 0
    let elems = [root]
    while(elems.length > 0){
        count++
        let newElems = []
        for(let elem of elems){
            if(elem.right){
                newElems.push(elem.right)
            }
            if(elem.left){
                newElems.push(elem.left)
            }
        }
        elems = newElems
    }
    return count
};