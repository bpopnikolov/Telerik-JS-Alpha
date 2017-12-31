const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


const arrayToSort = [5, 8, 4, 6, 7, 3, 1, 2];


const selectionSort = (arr) => {
    let min;

    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
};

selectionSort(arrayToSort);
console.log(arrayToSort);
