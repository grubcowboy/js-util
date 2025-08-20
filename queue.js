export class Queue {
    constructor() {
        this.items = [];
    }

    push(item) {
        // Add value to end of queue
        this.items.push(item);
    }

    pop() {
        // Pop head value
        // return this.items.splice(0, 1)[0];
        return this.items.shift();
    }

    peek() {
        // Return head value
        return this.items[0];
    }

    len() {
        // Length of queue
        return this.items.length;
    }
}