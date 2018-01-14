const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
let test = [`7
8
2 7
2 6
1 4
1 7
7 3
3 6
3 5
5 6`];
test = test[0].split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;
const Queue = require('../../Linear-Data-Structures/queue/queue');


class Graph {
    constructor() {
        this.vertices = {};
    }

    addEdge(v1, v2) {
        if (!this.vertices.hasOwnProperty(v1)) {
            this.vertices[v1] = [];
        }
        if (!this.vertices.hasOwnProperty(v2)) {
            this.vertices[v2] = [];
        }

        this.vertices[v1].push(+v2);
        this.vertices[v2].push(+v1);
    }
}

const graph1 = new Graph();
const n = +gets();
const m = +gets();

for (let i = 0; i < m; i++) {
    const edge = gets().split(' ');
    // console.log(gets());
    graph1.addEdge(edge[0], edge[1]);
}
// console.log(graph1.vertices);

const printGraphWithBfs = (graph) => {
    const used = Array(m).fill(false);
    const startVertix = 3;
    const path = Array(m).fill(0);
    const distances = Array(m).fill(0);
    path[startVertix] = -1;
    

    const queue = new Queue();
    queue.enqueue(startVertix);
    used[startVertix] = true;

    while (!queue.isEmpty()) {
        const x = queue.dequeue();
        print(x);

        for (const v of graph[x]) {
            if (used[v]) {
                continue;
            }
            path[v] = x;
            distances[v] = distances[x] + 1;
            queue.enqueue(v);
            used[v] = true;
        }
    }
    console.log(path);
    console.log(distances);
};



printGraphWithBfs(graph1.vertices);
