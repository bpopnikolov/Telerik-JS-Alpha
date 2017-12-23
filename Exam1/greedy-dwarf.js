const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, m] = gets().split(' ').map((x) => +x);

const lab = Array(n).fill().map((x) => gets().split(' ').map((y) => +y));
// const lab = [
//     [1, 0, 2],
//     [1, 0, 0],
//     [1, 1, 1],
//     [1, 0, 1],
// ];


const joro = {
    coins: 0,
    row: 0,
    col: 0,
    escaped: false,
};

for (let i = 0; i < lab.length; i++) {
    for (let j = 0; j < lab[i].length; j++) {
        if (lab[i][j] === 0) {
            joro.row = i;
            joro.col = j;
        }
    }
}

const isValidIndex = (i, j) => {
    if (i >= n || i < 0) {
        return false;
    }
    if (j >= m || j < 0) {
        return false;
    }

    return true;
};

// 0 -> left, 1 -> right, 2 -> up, 3 -> down

const findBestCell = (i, j) => {
    const cells = [];
    let max = 0;

    // check if cell left has more coins
    if (isValidIndex(joro.row, joro.col - 1)) {
        cells.push(lab[joro.row][joro.col - 1]);
    } else {
        cells.push(-1);
    }

    // check if cell right has more coins
    if (isValidIndex(joro.row, joro.col + 1)) {
        cells.push(lab[joro.row][joro.col + 1]);
    } else {
        cells.push(-1);
    }
    // check if cell above has more coions
    if (isValidIndex(joro.row - 1, joro.col)) {
        cells.push(lab[joro.row - 1][joro.col]);
    } else {
        cells.push(-1);
    }
    // check if cell belowe has more coins
    if (isValidIndex(joro.row + 1, joro.col)) {
        cells.push(lab[joro.row + 1][joro.col]);
    } else {
        cells.push(-1);
    }

    max = Math.max(...cells);

    // console.log(cells);
    // console.log(cells.indexOf(max));
    if (max <= 0) {
        return -5;
    }
    return cells.indexOf(max);

    // return cells.indexOf(max);
};

while (!joro.escaped) {
    // console.log(joro.row, joro.col);
    // console.log(findBestCell(joro.row, joro.col));
    // console.log(canExit(joro.row, joro.col));

    if (findBestCell(joro.row, joro.col) === -5) {
        if (lab[joro.row][joro.col] > 0) {
            joro.coins++;
        }
        joro.escaped = true;
        break;
    }
    if (lab[joro.row][joro.col] !== 0) {
        lab[joro.row][joro.col] -= 1;
        joro.coins++;
    }
    // lab.forEach((x) => {
    //     console.log(x);
    // });


    // go left
    if (findBestCell(joro.row, joro.col) === 0) {
        joro.col -= 1;
        // console.log('going left');
        continue;
    }
    // go right
    if (findBestCell(joro.row, joro.col) === 1) {
        joro.col += 1;
        // console.log('going right');
        continue;

    }
    // go up
    if (findBestCell(joro.row, joro.col) === 2) {
        joro.row -= 1;
        // console.log('going up');
        continue;
    }
    // go down
    if (findBestCell(joro.row, joro.col) === 3) {
        joro.row += 1;
        // console.log('going down');
        continue;
    }
}

    // lab.forEach((x) => {
    //     console.log(x);
    // });
// console.log(joro.row, joro.col);
// console.log(findBestCell(joro.row, joro.col));

print(joro.coins);
