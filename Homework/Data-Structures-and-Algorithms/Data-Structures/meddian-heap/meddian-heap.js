const BinaryHeap = require('./binary-heap/binary-heap');

const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

class MeddianHeap {
    constructor() {
        this._minHeap = new BinaryHeap((a, b) => {
            return a < b;
        });
        this._maxHeap = new BinaryHeap((a, b) => a > b);
    }

    isEmpty() {
        return this._minHeap.isEmpty() && this._maxHeap.isEmpty();
    }

    insert(value) {
        // if empty push into minHeap first
        if (this.isEmpty()) {
            this._minHeap.insert(value);
        } else {
            // add to appropriate heap
            // if value is less than or equal ot meddian push to maxHeap
            if (value <= this.getMeddian()) {
                this._maxHeap.insert(value);
            } else {
                // if value is greater than meddian push to minHeap
                this._minHeap.insert(value);
            }
        }
        this._rebalance();
    }

    _rebalance() {
        // if _min and _max heap length differs by more than 1
        // then rebalance is needed;
        if (Math.abs(this._minHeap.length - this._maxHeap.length) > 1) {
            // check which one is greater and removeTop from it and
            // push it into the other
            if (this._maxHeap.length > this._minHeap.length) {
                this._minHeap.insert(this._maxHeap.getTop());
                this._maxHeap.removeTop();
            } else {
                this._maxHeap.insert(this._minHeap.getTop());
                this._minHeap.removeTop();
            }
        }
    }

    getMeddian() {
        // if minHeap and maxHeap length is equal than meddian is the average
        // of the roots of the heaps.
        if (this._minHeap.length === this._maxHeap.length) {
            return (this._minHeap.getTop() + this._maxHeap.getTop()) / 2;
            // else the meddian is the top of the  heap with more elements
        } else if (this._maxHeap.length > this._minHeap.length) {
            return this._maxHeap.getTop();
        }
        return this._minHeap.getTop();
    }
}

// Medians SOLUTION FOR TELERIK JUDGE
// const mheap = new MeddianHeap();
// const result = [];
// for (;;) {
//     const command = gets();
//     if (command.startsWith('ADD')) {
//         const x = command.split(' ')[1] | 0;
//         mheap.insert(x);
//     } else if (command.startsWith('FIND')) {
//          result.push(mheap.getMeddian());
//     } else {
//         break;
//     }
// }

// result.forEach((x) => print(x));


