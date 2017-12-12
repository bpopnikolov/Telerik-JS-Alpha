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



    append(...args) {
        if (args.length === 1) {
            const node = new Node(args[0]);
            if (!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            this.length++;
        } else {
            args.forEach((x) => {
                this.append(x);
            });
        }
        return this;
    }

    preprend(...args) {

    }

    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}

const list = new LinkedList();

list.append(4, 7, 6).append(5);
console.log(list.head.next);
console.log('-'.repeat(30));
console.log(list.tail);
console.log(list.length);
