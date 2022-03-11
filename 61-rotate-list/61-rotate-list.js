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
var rotateRight = function(head, k) {
    if(!head){
        return head
    }
    let headPointer = head
    while(k){
        headPointer = headPointer.next
        if(headPointer == null){
            headPointer = head
        }
        k--
    }
    let subHeadPointer = head
    while(headPointer.next){
        headPointer = headPointer.next
        subHeadPointer = subHeadPointer.next
    }
    headPointer.next = head
    head = subHeadPointer.next
    subHeadPointer.next = null
    return head
    
};