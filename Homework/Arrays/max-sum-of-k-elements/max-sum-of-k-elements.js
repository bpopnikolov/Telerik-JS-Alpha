const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const k = +gets();
const numbers = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    numbers.push(+gets());
}


// Select Sort

const swap = (items, firstIndex, secondIndex) => {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
};

const selectionSort = (items) => {
    const len = items.length;
    let min;

    for (let i = 0; i < len; i++) {
        // set minimum to this position
        min = i;

        // check the rest of the array to see if anything is smaller
        for (let j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }

        // if the minimum isn't in the position, swap it
        if (i !== min) {
            swap(items, i, min);
        }
    }

    return items;
};


selectionSort(numbers);
// console.log(numbers);

for (let i = 0; i < k; i++) {
    sum += numbers[numbers.length - 1 - i];
}
print(sum);
