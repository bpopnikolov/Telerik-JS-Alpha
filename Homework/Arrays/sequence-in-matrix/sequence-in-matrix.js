const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, m] = gets().split(' ').map((x) => +x);
let maxSum = Number.MIN_SAFE_INTEGER;

const matrix = Array(n).fill([]).map((x) => gets().split(' ').map((y) => +y));

// print(matrix);

const checkCol = (row, col, arr) => {
    if (row >= arr.length) {
        return 0;
    }
    if (row + 1 < arr.length) {
        if (arr[row][col] !== arr[row + 1][col]) {
            return 1;
        }
    }
    return 1 + checkCol(row + 1, col, arr);
};

const checkRow = (row, col, arr) => {
    if (col >= arr[row].length) {
        return 0;
    }
    if (col + 1 < arr[row].length) {
        if (arr[row][col] !== arr[row][col + 1]) {
            return 1;
        }
    }

    return 1 + checkRow(row, col + 1, arr);
};

const checkRd = (row, col, arr) => {
    if (col >= arr[0].length || row >= arr.length) {
        return 0;
    }
    if (col + 1 < arr[0].length && row + 1 < arr.length) {
        if (arr[row][col] !== arr[row + 1][col + 1]) {
            return 1;
        }
    }
    return 1 + checkRd(row + 1, col + 1, arr);
};

const checkLd = (row, col, arr) => {
    if (col < 0 || row >= arr.length) {
        return 0;
    }
    if (col - 1 >= 0 && row + 1 < arr.length) {
        if (arr[row][col] !== arr[row + 1][col - 1]) {
            return 1;
        }
    }
    return 1 + checkLd(row + 1, col - 1, arr);
};

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

        const colSum = checkCol(i, j, matrix);
        const rowSum = checkRow(i, j, matrix);
        const ld = checkLd(i, j, matrix);
        const rd = checkRd(i, j, matrix);

        // console.log('-'.repeat(30));
        // console.log(i, j);
        // console.log(ld);
        // console.log('-'.repeat(30));


        if (maxSum < Math.max(colSum, rowSum, ld, rd)) {
            maxSum = Math.max(colSum, rowSum, ld, rd);
        }
    }
}

print(maxSum);
