/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let data = []
    let nodes = [root]
    let check = true
    while(check){
        check = false
        let newNodes = []
        for(let node of nodes){
            if(node){
                check = true
                data.push(node.val)
                newNodes.push(node.left)
                newNodes.push(node.right)
            }else{
                data.push("null")
            }
        }
        nodes = newNodes
    }
    return data.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function(data) {
    let nodes = data.split(",")
    let head = nodes[0] == "null" ? null : new TreeNode(nodes[0])
    let i = 1
    let subNodes = [head]
    while(i < nodes.length){
        let newNodes = []
        for(let node of subNodes){
            if(node){
                node.left = nodes[i] == 'null' ? null : new TreeNode(nodes[i])
                node.right = nodes[i+1] == 'null' ? null : new TreeNode(nodes[i+1])
                node.left && newNodes.push(node.left)
                node.right && newNodes.push(node.right)
            }
            i+=2  
        }
        subNodes = newNodes
    }
    return head
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */