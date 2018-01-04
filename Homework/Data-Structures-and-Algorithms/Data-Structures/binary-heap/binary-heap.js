class BinaryHeap {
    constructor(cmpFunc) {
        this._heap = [];
        this._heap.push(null);
        this._cmpFunc = cmpFunc;
    }

    getTop() {
        return this._heap[1];
    }

    get length() {
        return this._heap.length - 1;
    }

    isEmpty() {
        return this._heap.length === 1;
    }

    insert(...value) {
        if (value.length === 1) {
            let index = this._heap.length; // index where inserted;
            this._heap.push(value[0]);

            // use this._heap[index] instead of value if swapping
            // value all the time and unncomment code below.
            while (index > 1 && this._cmpFunc(value, this._heap[Math.trunc(index / 2)])) {
                // comment this if using swapping.
                this._heap[index] = this._heap[Math.trunc(index / 2)];
                // [this._heap[index],
                //     this._heap[index / 2],
                // ] = [this._heap[index / 2], this._heap[index]];
                index = Math.trunc(index / 2);
            }
            this._heap[index] = value[0];
        } else {
            value.forEach((x) => this.insert(x));
        }
    }

    removeTop() {
        const value = this._heap.pop();
        let index = 1;
        if (!this.isEmpty()) {
            while (index * 2 + 1 < this._heap.length) {
                const smallestChildIndex = this._cmpFunc(this._heap[index * 2],
                        this._heap[index * 2 + 1]) ?
                    index * 2 :
                    index * 2 + 1;
                if (this._cmpFunc(this._heap[smallestChildIndex], value)) {
                    this._heap[index] = this._heap[smallestChildIndex];
                    index = smallestChildIndex;
                } else {
                    break;
                }
            }

            if (index * 2 < this._heap.length) {
                const smallestChildIndex = index * 2;
                if (this._cmpFunc(this._heap[smallestChildIndex] < value)) {
                    this._heap[index] = this._heap[smallestChildIndex];
                    index = smallestChildIndex;
                }
            }
            this._heap[index] = value;
        }
    }
}


const arr = [10, 5, 4, 7, 11, 13, 2, 1, 3, 17];
const heap = new BinaryHeap((a, b) => a > b);

// arr.forEach((x) => {
//     heap.insert(x);
//     console.log(heap.getTop());
// });
heap.insert(...arr);
console.log(heap);
const arr2 = [];
for (let i = 0; !heap.isEmpty(); i++) {
    arr2.push(heap.getTop());
    heap.removeTop();
}
console.log(arr2);
console.log(heap);
