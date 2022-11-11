class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        return this.items.push
    }

    pop() {
        if (this.items.length === 0) {
            return 'underflow'
        }

        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    printStack() {
        let str = ''

        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' '
        }

        return str
    }
}

let stack = new Stack();
console.log(stack.isEmpty());

// return an underflow
console.log(stack.pop());

let length = stack.peek();

console.log(stack.printStack());