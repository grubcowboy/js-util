// TODO: make stack.test.js

export class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        // Return tail value (top of stack)
        return this.items[this.len() - 1];
    }

    len() {
        return this.items.length
    }
}