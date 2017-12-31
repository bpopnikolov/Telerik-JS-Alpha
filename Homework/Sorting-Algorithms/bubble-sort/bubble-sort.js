const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const arrayToSort = [5, 8, 4, 6, 7, 3, 1, 2];

const bubbleSort = (arr) => {
    let swapIsDone = false;

    while (!swapIsDone) {
        swapIsDone = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapIsDone = false;
            }
        }
    }
};

bubbleSort(arrayToSort);
console.log(arrayToSort);
