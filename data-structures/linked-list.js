class Node {
    constructor(elem) {
        this.elem = elem
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    add(elem) {
        let node = new Node(elem);
        let curr

        if (this.head == null) {
            this.head = node
        } else {
            curr = this.head

            while (curr.next) {
                curr = curr.next
            }

            curr.next = node
        }

        this.size++
    }

    insertAt (elem, index)  {
        if (index < 0 || index > this.size) {
            return console.log('please enter a valid index')
        }

        else {
            let node = new Node(elem),
                curr, prev

            curr = this.head

            if (index === 0) {
                node.next = this.head
                this.head = node
            } else {
                curr = this.head

                let it = 0

                while (it < index) {
                    it++
                    prev = curr
                    curr = curr.next
                }

                node.next = curr
                prev.next = node
            }

            this.size++
        }
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return console.log('please enter a valid index')
        } else {
            let curr, prev = null, it = 0
            curr = this.head
            prev = curr

            if (index === 0) {
                this.head = curr.next
            } else {
                while (it < index) {
                    it++
                    prev = curr
                    curr = curr.next
                }

                prev.next = curr.next
            }

            this.size = this.size - 1;

            return curr.elem
        }
    }

    removeElem(elem) {
        let curr = this.head
        let prev

        while (curr != null) {
            if (curr.elem === elem) {
                if (prev === null) {
                    this.head = curr.next
                } else {
                    prev.next = curr.next
                }

                this.size = this.size - 1
            }

            prev = curr
            curr = curr.next
        }

        return -1
    }

    indexOf(elem) {
        let count = 0,
            curr = this.head

        while (curr != null) {
            if (curr.elem === elem) {
                return count
            }

            count++
        }

        // nothing was found
        return -1
    }

    isEmpty() {
        return this.size === 0
    }

    sizeOfList() {
        console.log(this.size);
    }
}