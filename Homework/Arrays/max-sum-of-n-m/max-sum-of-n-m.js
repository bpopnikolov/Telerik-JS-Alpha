const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, m] = gets().split(' ').map((x) => +x);
let maxSum = Number.MIN_SAFE_INTEGER;

const matrix = Array(n).fill([]).map((x) => gets().split(' ').map((y)=> +y));


for (let row = 0; row < matrix.length - 2; row++) {
    for (let col = 0; col < matrix[row].length - 2; col++) {
        let currentSum = 0;
        // row 0
        currentSum += matrix[row][col] + matrix[row][col + 1] +
            matrix[row][col + 2];
        // row 1
        currentSum += matrix[row + 1][col] + matrix[row + 1][col + 1] +
            matrix[row + 1][col + 2];
        // row 2
        currentSum += matrix[row + 2][col] + matrix[row + 2][col + 1] +
            matrix[row + 2][col + 2];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
}

print(maxSum);
