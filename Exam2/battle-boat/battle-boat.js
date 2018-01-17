const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `3 4
0 1 1 1
1 1 0 0
1 1 0 1
1 0 1 1
1 0 0 0
1 1 1 1
Shoot 2 3
Shoot 1 1
Shoot 2 1
Shoot 0 0
Shoot 1 1
Shoot 1 1
Shoot 2 1
Shoot 2 3
END`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, m] = gets().split(' ').map((x) => +x);

const board = Array.from({
    length: 2 * n,
});

let player1Boats = 0;
let player2Boats = 0;
const shootPlayer2 = (x, y) => {
    if (board[x][y] === 1) {
        board[x][y] = 'X';
        return 'Booom';
    } else if (board[x][y] === 0) {
        board[x][y] = 'X';
        return 'Missed';
    }
    return `You already shot there! `;
};
const shootPlayer1 = (x, y) => {
    const x2 = board.length - 1 - x;
    const y2 = board[x2].length - 1 - y;
    if (board[x2][y2] === 1) {
        board[x2][y2] = 'X';
        return 'Booom';
    } else if (board[x2][y2] === 0) {
        board[x2][y2] = 'X';
        return 'Missed';
    }

    return `You already shot there! `;

};
// console.log(board);

for (let i = 0; i < board.length; i++) {
    const input = gets().trim().split(' ').map((x) => +x);
    if (i < Math.trunc(board.length / 2)) {
        for (const boat of input) {
            if (boat === 1) {
                player1Boats++;
            }
        }
    } else {
        for (const boat of input) {
            if (boat === 1) {
                player2Boats++;
            }
        }
    }
    board[i] = input;
}
// console.log(board);

// const result = [];
let turn = 1;
for (;;) {
    const command = gets().split(' ');

    if (command[0] === 'Shoot') {
        // player 1 turn
        if (turn % 2 !== 0) {
            const outcome = shootPlayer1(command[1], command[2]);
            print(outcome);
            if (outcome === 'Booom') {
                player2Boats--;
            }
        } else {
            // player 2 turn
            const outcome = shootPlayer2(command[1], command[2]);
            print(outcome);
            if (outcome === 'Booom') {
                player1Boats--;
            }
        }

        turn++;
        continue;
    }
    break;
}
// result.forEach((x) => print(x));
// console.log(result);
print(`${player1Boats}:${player2Boats}`);
