/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = fast = head
    let count = 0
    while(fast !== null){
        fast = fast.next.next
        slow = slow.next
        count++
    }
    let prev = null
    let cur = slow
    while(cur !== null){
        let next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    let max = 0
    while(prev != null){
        let elem = prev.val + head.val
        if(elem > max){
            max = elem
        }
        prev = prev.next
        head = head.next
    }
    return max
};