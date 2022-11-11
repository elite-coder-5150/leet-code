/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * @param {*} head 
 * @returns 
 */
const reverseList = (head) => {
    if (!head) {
        return head
    }

    let node = head
    let prev = null

    while (node) {
        const cache = node.next
        node.next = prev
        prev = node
        node = cache
    }

    return prev
};

// besr solution
const _revList = (head) => {
    if (!head) {
        return head
    }

    let node = head

    while (node.next) {
        const cache = node.next
        node.next = cache.nex;
        cache.next = head;
        head = cache;
    }

    return head;
}