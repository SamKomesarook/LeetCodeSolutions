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
var sortList = function(head) {
    if(head == null){
        return null
    }
    let nums = []
    let newHead = head
    while(newHead){
        nums.push(newHead.val)
        newHead = newHead.next
    }
    nums.sort((a,b) => a-b)
    newHead = new ListNode(nums[0], null)
    let finalHead = newHead
    for(let i=1; i<nums.length; i++){
        newHead.next = new ListNode(nums[i],null)
        newHead = newHead.next
    }
    return finalHead
};