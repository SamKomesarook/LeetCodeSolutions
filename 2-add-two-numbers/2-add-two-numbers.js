/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let rem = 0
    let res = []
    while(l1 || l2){
        let total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rem
        res.push(total % 10)
        if(total >= 10){
            rem = 1
        }else{
            rem = 0
        }
        l1 = (l1 ? l1.next : null)
        l2 = (l2 ? l2.next : null)
    }
    if(rem){
        res.push(rem)
    }
    let head = new ListNode(res[0],null)
    let sub = head
    for(let i=1; i<res.length; i++){
        sub.next = new ListNode(res[i],null)
        sub = sub.next
    }
    return head
};