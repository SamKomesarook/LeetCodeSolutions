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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root == null){
        return []
    }
    let elems = []
    let toSearch = [root]
    while(toSearch.length !== 0){
        elems.push(toSearch[toSearch.length-1].val)
        let newSearch = []
        for(let i=0; i < toSearch.length; i++){
            if(toSearch[i].left !== null){
                newSearch.push(toSearch[i].left)
            }
            if(toSearch[i].right !== null){
                newSearch.push(toSearch[i].right)
            }
        }
        toSearch = newSearch
    }
    return elems
};
