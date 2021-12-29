/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next == null){
        return null
    }
    let runner = head
    let list = head
    for(let i=0; i<n; i++){
        head = head.next
    }
    if(head == null){
        return runner.next
    }
    while(head.next !== null){
        head = head.next
        runner = runner.next
    }
    runner.next = runner.next.next

    return list
};