/**
 *  You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together
 the nodes of the first two lists.

Return the head of the merged linked list.


 * @param {*} l1 
 * @param {*} l2 
 * @returns 
 */
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
const mergeTwoLists = (l1, l2) => {
    const merged = new ListNode();
    let current = merged;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return merged.next;
}
