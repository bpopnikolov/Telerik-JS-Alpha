const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();

const matrix = Array.from({
    length: n,
}).fill(new Array(n));

// Recursive way!
const fillArray = (arr, row, col) => {
    if (row < arr.length) {
        if (col < arr[row].length) {
            arr[row][col] = row + col + 1;
            fillArray(arr, row, col + 1);
        } else {
            print(arr[row].join(' '));
            fillArray(arr, row + 1, 0);
        }
    }
};

fillArray(matrix, 0, 0);

// Iterative way!
// for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[0].length; col++) {
//         matrix[row][col] = row + col + 1;
//     }
//     print(matrix[row].join(' '));
// }
