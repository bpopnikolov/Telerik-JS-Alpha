/* eslint-disable */

function solve(args) {

    const valley = args[0].split(',').map((x) => +x);
    const n = args[1];
    const patterns = [];
    for (let i = 0; i < n; i++) {
        patterns.push(args[i + 2].split(', ').map((x) => +x));
    }

    let results = [];

for (let i = 0; i < patterns.length; i++) {
    let pattern = patterns[i];
    const visited = [];
    let j = 0;
    let index = 0;
    visited[index] = true;
    let coins = valley[0];
    while (pattern[j] + index >= 0 && pattern[j] + index < valley.length) {
        index += pattern[j];
        if (visited[index]) {
            break;
        }
        coins += valley[index];
        visited[index] = true;
        j++;
        j %= pattern.length;
        // console.log(coins);
    }
    
    // console.log(visited);
    results.push(coins);
}

console.log(Math.max(...results));    

}


const test = [
    '1, 3, -6, 7, 4, 1, 12',
    '3',
    '1, 2, -3',
    '1, 3, -2',
    '1, -1'
]

solve(test);
