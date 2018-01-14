const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const startPlayer = +gets() - 1;

const used = Array(n).fill(false);
const adjacencyMatrix = Array(n).fill().map((x) => Array(n).fill(0));

let currentSum = 0;
let minSum = Number.MAX_SAFE_INTEGER;

// represent the graph with adjacencyMatrix
// endless loop
for (;;) {
    const input = gets();
    if (input === 'end') {
        break;
    }

    const edge = input.split(' ').map((x) => +x);
    adjacencyMatrix[edge[0] - 1][edge[1] - 1] = edge[2];
    adjacencyMatrix[edge[1] - 1][edge[0] - 1] = edge[2];
}
// console.log(adjacencyMatrix);

const hamiltonian = (from, visitedNodes) => {
    if (startPlayer === from && visitedNodes > 0 && visitedNodes === n) {
        // console.log(result.join(' '));
        // console.log();
        if (currentSum < minSum) {
            minSum = currentSum;
        }
        return;
    }

    if (used[from]) {
        return;
    }

    used[from] = true;
    for (let to = 0; to < n; to++) {
        if (adjacencyMatrix[from][to] !== 0 && to !== from) {
            currentSum += adjacencyMatrix[from][to];
            if (currentSum < minSum) {
                hamiltonian(to, visitedNodes + 1);
            }
            currentSum -= adjacencyMatrix[from][to];
        }
    }
    used[from] = false;
};

hamiltonian(startPlayer, 0);
if (minSum < Number.MAX_SAFE_INTEGER) {
    print(minSum);
} else {
    print(0);
}
