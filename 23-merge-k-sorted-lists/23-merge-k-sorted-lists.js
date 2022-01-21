/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let head = new ListNode(Infinity, null)
    let smallIndex = null
    let check = true
    for(let i=0; i<lists.length; i++){
        let list = lists[i]
        if(list == null){
                continue
        }
        if(list.val < head.val){
            check = false
            head = list
            smallIndex = i
        }
    }
    if(check){
        return null
    }
    lists[smallIndex] = lists[smallIndex].next
    head.next = null
    let tracker = head
    while(true){
        let sub = new ListNode(Infinity, null)
        let smallIndex = null
        let check = true
        for(let i=0; i<lists.length; i++){
            let list = lists[i]
            if(list == null){
                continue
            }
            if(list.val < sub.val){
                check = false
                sub = list
                smallIndex = i
            }
        }
        if(check){
            break
        }
        lists[smallIndex] = lists[smallIndex].next
        tracker.next = sub
        tracker = tracker.next
        tracker.next = null
    }
    return head
}