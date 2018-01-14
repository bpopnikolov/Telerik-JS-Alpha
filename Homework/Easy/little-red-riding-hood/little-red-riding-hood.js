/* globals Set */
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `5
4 5 1 3 0
1 2
5 1
4 5
3 2`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ---------------------------------------------------------------

class Graph {
    constructor() {
        this.vertices = {};
    }

    addEdge(from, to) {
        if (typeof this.vertices[from] === 'undefined') {
            this.vertices[from] = [to];
        } else {
            this.vertices[from].push(to);
        }

        if (typeof this.vertices[to] === 'undefined') {
            this.vertices[to] = [from];
        } else {
            this.vertices[to].push(from);
        }
    }

    collectCoins(curCity, prev) {

        if (this.vertices[curCity].length === 1 && prev === this.vertices[curCity][0]) {
            if (curCollectedCoins > maxCollectedCoins) {
                maxCollectedCoins = curCollectedCoins;
                next = curCity;
            }
            return;
        }

        for (const nextCity of this.vertices[curCity]) {
            if (nextCity === prev) {
                continue;
            }
            curCollectedCoins += coins[nextCity];
            this.collectCoins(nextCity, curCity);
            curCollectedCoins -= coins[nextCity];
        }
    }

    printGraph() {
        for (const v in this.vertices) {
            if (this.vertices.hasOwnProperty(v)) {
                this.vertices[v].forEach((edge) =>
                    print(`${v} -> ${edge}`));
            }
        }
    }
}

const verticesNumber = +gets();
const coins = {};
gets().split(' ').forEach((x, i) => {
    coins[i + 1] = +x;
});

const graph = new Graph();
let curCollectedCoins = 0;
let maxCollectedCoins = Number.MIN_SAFE_INTEGER;
let next = 0;


for (let i = 0; i < verticesNumber - 1; i++) {
    const edge = gets().split(' ').map((x) => +x);
    graph.addEdge(edge[0], edge[1]);
}


curCollectedCoins += coins[1];
graph.collectCoins(1, -1);

curCollectedCoins = coins[next];
graph.collectCoins(next, -1);
print(maxCollectedCoins);
