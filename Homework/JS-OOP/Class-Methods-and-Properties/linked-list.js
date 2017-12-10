class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }



    append(args) {

        const node = new Node(args);
        let currentNode = this.head;

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;

            return this;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        node.previous = currentNode;
        currentNode.next = node;
        this.tail = node;
        this.length++;

        return this;
    }

    preprend(...args) {

    }

    // get length() {
    //     return this.length;
    // }
}

const list = new LinkedList();

list.append(4).append(5);
console.log(list.head.next);
console.log('-'.repeat(30));
console.log(list);
