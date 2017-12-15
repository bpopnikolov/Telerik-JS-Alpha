const LinkedList = require('../doubly-linked-list/doubly-linked-list');

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(value) {
        this.linkedList.append(value);
    }

    dequeue() {
        return this.linkedList.length ? this.linkedList.removeAt(0) : null;
    }

    get length() {
        return this.linkedList.length;
    }
}


module.exports = Queue;
