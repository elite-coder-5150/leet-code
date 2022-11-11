public ListNode swapPairs(ListNode head) {
    final ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode curr = dummy;

    while (curr != null && curr.next != null && curr.next.next != null) {
        curr.next = swap(curr.next, curr.next.next);
        curr = curr.next.next
    }

    return dummy.next
}

private ListNode swap(ListNode first, ListNode second) {
    first.next = second.next;
    second.next = first;
    return second;
}