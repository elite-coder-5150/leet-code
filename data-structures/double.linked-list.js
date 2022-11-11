class Node {
    constructor(val) {
        this.data = val
        this.prev = new Node()
        this.next = new Node()
    }
}

class DoubleLinkedList {
    constructor(data) {
        this.data = data;
        this.head = new Node;
        this.prev = new Node()
    }
    push(newData) {
        let newNode = new Node();
        newNode.next = this.head;
        newNode.prev = null

        if (this.head != null) {
            this.head.prev = newNode;
        }

        this.head = newNode
    }

    insertAfter(prevNode, newData) {
        if (prevNode === null) {
            document.write('The given previous nod cannot be NULL <br />')
            return
        }

        let newNode = new Node(newData)

        newNode.next = prevNode.next
        newNode.prev = prevNode

        if (newNode.next !== null) {
            newNode.next.prev = newNode
        }
    }

    insertBefore(nextNode, newData) {
        if (nextNode == null) {
            document.write('the given next node can not be NULL')
            return
        }

        let newNode = new Node(newData)
        newNode.prev = nextNode.prev
        nextNode.prev = newNode
    }

    append(newData) {
        let newNode = new Node(newData)
        let last = this.head
        newNode.next = null

        if (this.head === null) {
            newNode.prev = null
            this.head = newNode

            return
        }

        while (last.next != null)  {
            last = last.next
        }

        last.next = newNode
        newNode.prev = last
    }
}
