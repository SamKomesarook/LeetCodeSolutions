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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let nodes = [root]
    while(nodes.length > 0){
        let newNodes = []
        for(let node of nodes){
            if(node && node.val == subRoot.val && recurse(node,subRoot)){
                return true
            }
            node.left && newNodes.push(node.left)
            node.right && newNodes.push(node.right)
        }
        nodes = newNodes
    }
    return false
};

let recurse = (node1, node2) => {
    if((node1 == null && node2) || (node1 && node2 == null)){
        return false
    }
    if(node1 == null && node2 == null){
        return true
    }
    return node1.val == node2.val && recurse(node1.left, node2.left) && recurse(node1.right, node2.right)
}