/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p == null || q == null){
        if(p == null && q == null){
            return true
        }
        return false
    }
    let queue1 = [p]
    let queue2 = [q]
    while(queue1.length > 0){
        let newQueue1 = []
        let newQueue2 = []
        let len = Math.max(queue1.length, queue2.length)
        for(let i=0; i<len; i++){
            let elem1 = queue1.shift()
            let elem2 = queue2.shift()
            if(elem1.val !== elem2.val){
                return false
            }
            if((elem1.left && elem2.left == null) || (elem1.left == null && elem2.left)){
                return false
            }
            if((elem1.right && elem2.right == null) || (elem1.right == null && elem2.right)){
                return false
            }
            if(elem1.left){
                newQueue1.push(elem1.left)
                newQueue2.push(elem2.left)
            } 
            if(elem1.right){
                newQueue1.push(elem1.right)
                newQueue2.push(elem2.right)
            }
        }
        queue1 = newQueue1
        queue2 = newQueue2
    }
    return true
};