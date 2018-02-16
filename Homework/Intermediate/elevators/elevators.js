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
0 1 1 0 4 4
7
2 3
5 4
3 5
0 2
4 4
4 2
1 3`];
test = test[0].split('\n');

/* eslint-disable */
const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */

/* globals Set */
const Queue = require('../Data-Structures-and-Algorithms/Linear-Data-Structures/queue/queue');

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

const graph = new Graph();
const n = +gets();
const edges = gets().split(' ').map((x) => +x);
const checked = {};
// create the graph/tree
edges.forEach((x, i) => {
    if (typeof checked[i + 1] === 'undefined') {
        checked[i + 1] = new Set();
    }

    if (typeof checked[x] === 'undefined') {
        checked[x] = new Set();
    }
    graph.addEdge(i + 1, x);
});

const q = +gets();

const bfs = (graph, s, n, m) => {
    const used = new Set();
    const startVertex = s;
    const path = Array(m).fill(0);
    const distances = Array(m).fill(0);
    path[startVertex] = -1;


    const queue = new Queue();
    queue.enqueue(startVertex);
    used.add(startVertex);

    while (!queue.isEmpty()) {
        const x = queue.dequeue();
        // print(x);

        for (const node1 of graph[x]) {
            if (used.has(node1)) {
                continue;
            }
            path[node1] = x;
            distances[node1] = distances[x] + 1;
            queue.enqueue(node1);
            used.add(node1);
        }
    }
    // console.log(path);
    // console.log(distances);

    return path;
};

const shrotestPath = bfs(graph.vertices, 0, n, n - 1);

const findPathBetweenNodes = (v, u) => {

    let node1 = v;
    let node2 = u;
    const path1 = [];
    const path2 = [];

    while (true) {

        if (node1 !== -1) {
            path1.push(node1);
            node1 = shrotestPath[node1];
        }
        if (node2 !== -1) {
            path2.push(node2);
            node2 = shrotestPath[node2];
        }
        if (node1 === -1 && node2 === -1) {
            break;
        }
    }
    // path1 = path1.reverse();
    // path2 = path2.reverse();

    // console.log(path1, path2);
    // console.log(path1.filter(function(x) {
    //     return path2.indexOf(x) !== -1;
    // }));

    const minPathLength = Math.min(path1.length, path2.length);
    let parent;
    for (let i = 0; i < minPathLength; i++) {
        if (path1[path1.length - 1 - i] === path2[path2.length - 1 - i]) {
            parent = path1[path1.length -1 - i];
        }
    }

    if (parent === v || parent === u) {
        return 'Directly';
    }

    return 'Through ' + parent;
};

const result = [];
for (let i = 0; i < q; i++) {
    const [a, b] = gets().split(' ').map((x) => +x);
    if (checked[a].has(b) || checked[b].has(a)) {
        continue;
    }
    checked[a].add(b);
    checked[b].add(a);
    if (a !== b) {
        result.push(findPathBetweenNodes(a, b));
    } else {
        result.push('You are there');
    }
}
console.log(checked);
print(result.join('\n'));
