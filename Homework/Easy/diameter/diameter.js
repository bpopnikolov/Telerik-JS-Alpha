/* globals Set */
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `16
2 3 92
5 2 10
14 3 42
2 4 26
14 12 50
4 6 93
9 6 24
15 14 9
0 2 95
8 0 90
0 13 60
9 10 59
1 0 66
11 12 7
7 10 35`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;


class Graph {
    constructor() {
        this.vertices = {};
    }

    addEdge(from, to, w) {
        if (typeof this.vertices[from] === 'undefined') {
            this.vertices[from] = [{
                vertix: to,
                weight: w,
            }];
        } else {
            this.vertices[from].push({
                vertix: to,
                weight: w,
            });
        }

        if (typeof this.vertices[to] === 'undefined') {
            this.vertices[to] = [{
                vertix: from,
                weight: w,
            }];
        } else {
            this.vertices[to].push({
                vertix: from,
                weight: w,
            });
        }
    }

    findBest(curNode) {
// console.log(curNode);
        if (this.vertices[curNode].length === 1 && used.has(this.vertices[curNode][0].vertix)) {
            // console.log(curPathWeight);
            if (curPathWeight > maxPathWeight) {
                maxPathWeight = curPathWeight;
                next = curNode;
            }
            return;
        }

        used.add(curNode);
        for (const nextNode of this.vertices[curNode]) {
            if (!used.has(nextNode.vertix)) {
                curPathWeight += nextNode.weight;
                // console.log(curPathWeight);
                this.findBest(nextNode.vertix);
                curPathWeight -= nextNode.weight;
            }
        }
    }
}

const v = +gets();

const graph = new Graph();
const used = new Set();
let curPathWeight = 0;
let maxPathWeight = Number.MIN_SAFE_INTEGER;
let next = 0;


for (let i = 0; i < v - 1; i++) {
    const edge = gets().split(' ').map((x) => +x);
    graph.addEdge(edge[0], edge[1], edge[2]);
}

// console.log(graph.vertices);
graph.findBest(0);
// console.log(used);
// console.log(next);
used.clear();
graph.findBest(next);
// console.log(curPathWeight);
print(maxPathWeight);
