export class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }


    delete(nodeValue) {
        let curr = this.head;
        let prev = null;

        if (curr.value === nodeValue && !prev) {
            this.head = curr.next;
            return;
        }

        while (curr) {
            if (curr.value === nodeValue) {
                // HEAD NODE
                prev.next = curr.next;
                return;
            } else {
                prev = curr;
                curr = curr.next;
            }
        }

    }

    print() {
        if (this.head) {
            let curr = this.head;
            let index = 0;
            while (curr) {
                console.log(`Node [${index}]`);
                console.log(`Value: ${curr.value}`);
                console.log(`Next: ${curr.next}\n`);
                curr = curr.next;
                index++;
            }
        }
    }
}