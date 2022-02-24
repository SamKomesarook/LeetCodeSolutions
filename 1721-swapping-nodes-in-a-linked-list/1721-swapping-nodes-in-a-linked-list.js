/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let lNode = head
    while(k > 1){
        lNode = lNode.next
        k--
    }
    let runner = head
    let rNode = lNode.next
    while(rNode){
        runner = runner.next
        rNode = rNode.next
    }
    let temp = lNode.val
    lNode.val = runner.val
    runner.val = temp
    return head
};