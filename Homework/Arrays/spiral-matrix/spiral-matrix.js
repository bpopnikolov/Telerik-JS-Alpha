const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();

const matrix = Array(n).fill().map((x) => Array(n));

let dir = 0;
let row = 0;
let col = 0;

const rowDirs = [0, 1, 0, -1];
const colDirs = [1, 0, -1, 0];

for (let counter = 1; counter <= n * n; counter++) {
    matrix[row][col] = counter;

    const nextRow = row + rowDirs[dir];
    const nextCol = col + colDirs[dir];

    if (nextRow >= n || nextRow < 0 ||
        nextCol >= n || nextCol < 0 ||
        typeof matrix[nextRow][nextCol] !== 'undefined') {
        dir += 1;
        dir = dir % 4;
    }

    row += rowDirs[dir];
    col += colDirs[dir];
}
matrix.forEach((x) => {
    print(x.join(' '));
});
