function swapPairs(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;

    while (curr !== null && curr.next !== null && curr.next.next !== null) {
        curr.next = swap(curr.next, curr.next.next);
        curr = curr.next.next;
    }

    return dummy.next;
}

function swap(first, second) {
    first.next = second.next;
    second.next = first;
    return second;
}
