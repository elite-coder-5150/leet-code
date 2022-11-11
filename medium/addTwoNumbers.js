/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *
 */
const addTwoNumbers = (l1, l2) => {
    let carry = 0;
    let head = new ListNode();
    let current = head;
    while (l1 || l2) {
        let sum = carry;
        if (l1) {
        sum += l1.val;
        l1 = l1.next;
        }
        if (l2) {
        sum += l2.val;
        l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if (carry) {
        current.next = new ListNode(carry);
    }
    return head.next;
}