const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
let m = 2 * n - 1;

const forest = Array(m).fill().map((x) => Array(n).fill('.'));
let row = 0;
let col = 0;
let direction = 1;

while (m > 0) {
    if (col === forest[0].length) {
        direction = 0;
        col -= 2;
    }
    forest[row][col] = '.';
    if (row < forest.length && col < forest[0].length && direction === 1) {
        forest[row][col] = '*';
        print(forest[row].join(''));
        row++;
        col++;
    }
    if (row < forest.length && col >= 0 && direction === 0) {
        forest[row][col] = '*';
        print(forest[row].join(''));
        row++;
        col--;
    }
    m--;
}
