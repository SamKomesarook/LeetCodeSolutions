/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 0
    let node = head
    while(node.next !== null){
        node = node.next
        count++
    }
    count = Math.ceil(count/2)
    while(count > 0){
        head = head.next
        count--
    }
    return head
};