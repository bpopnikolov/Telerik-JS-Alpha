// const matrix = [
//     [1, 3, 2, 2, 2, 4],
//     [3, 3, 3, 2, 4, 4],
//     [4, 3, 1, 2, 3, 3],
//     [4, 3, 1, 3, 3, 1],
//     [4, 3, 3, 3, 1, 1],
// ];

const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, m] = gets().split(' ').map((x) => +x);
const matrix = Array(n).fill().map((x) => gets().split(' ').map((y)=> +y));


const calculated = Array(matrix.length).fill().
    map((x) => Array(matrix[0].length).fill(0));

const depthFirstSearch = (arr, row, col, calc) => {
    let result = 1;
    calc[row][col] = true;
    // up
    if (((row - 1) >= 0) &&
        (arr[row - 1][col] === arr[row][col]) &&
        !calc[row - 1][col]) {
        result += depthFirstSearch(arr, row - 1, col, calc);
    }
    // down
    if (((row + 1) < arr.length) &&
        (arr[row + 1][col] === arr[row][col]) &&
        !calc[row + 1][col]) {
        result += depthFirstSearch(arr, row + 1, col, calc);
    }

    // left
    if ((col - 1 >= 0) &&
        (arr[row][col - 1] === arr[row][col]) &&
        !calc[row][col - 1]) {
        result += depthFirstSearch(arr, row, col - 1, calc);
    }
    // right
    if (((col + 1) < arr[0].length) &&
        (arr[row][col + 1] === arr[row][col]) &&
        !calc[row][col + 1]) {
        result += depthFirstSearch(arr, row, col + 1, calc);
    }

    return result;
};
let bestCount = 0;

// console.log(matrix);
// console.log('-'.repeat(30));
// console.log(calculated);

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
        if (!calculated[row][col]) {
            const count = depthFirstSearch(matrix, row, col, calculated);

            if (bestCount < count) {
                bestCount = count;
            }
        }
    }
}
// console.log('-'.repeat(30));
print(bestCount);
