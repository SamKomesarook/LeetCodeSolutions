/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1 == null || list2 == null){
        if(list1){
            return list1
        }
        if(list2){
            return list2
        }
        return null
    }
    let head = null
    let pointer1 = list1
    let pointer2 = list2
    if(pointer1.val < pointer2.val){
        head = list1
        pointer1 = pointer1.next
    }else{
        head = list2
        pointer2 = pointer2.next
    }
    let headPointer = head
    while(true){
        if(pointer1 == null){
            headPointer.next = pointer2
            break
        }
        if(pointer2 == null){
            headPointer.next = pointer1
            break
        }
        if(pointer1.val < pointer2.val){
            headPointer.next = pointer1
            pointer1 = pointer1.next
        }else{
            headPointer.next = pointer2
            pointer2 = pointer2.next
        }
        headPointer = headPointer.next
    }
    return head
};