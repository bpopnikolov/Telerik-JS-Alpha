/* globals Set */
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `6
(1 <- 2)
(1 <- 9)
(2 <- 7)
(6 <- 3)
(1 <- 6)`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;


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


    findMaxPath(curVertex, prev) {
        // console.log(curVertex);
        if (this.vertices[curVertex].length === 1 && prev === this.vertices[curVertex][0]) {
            if (curPath > maxPath) {
                maxPath = curPath;
                next = curVertex;
            }
            return;
        }

        for (const nextVertex of this.vertices[curVertex]) {
            if (nextVertex === prev) {
                continue;
            }
            curPath += nextVertex;
            this.findMaxPath(nextVertex, curVertex);
            curPath -= nextVertex;
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

const v = +gets();

const graph = new Graph();
let curPath = 0;
let maxPath = Number.MIN_SAFE_INTEGER;
let next = 0;


for (let i = 0; i < v - 1; i++) {
    // console.log(gets());
    const input = gets();
    const edge = input.substring(1, input.length - 1).split('<-').map((x) => +x);
    graph.addEdge(edge[0], edge[1]);
}

// console.log(graph.vertices);
let start = 0;
for (const key in graph.vertices) {
    if (typeof graph.vertices[key] !== 'undefined') {
        start = key;
    }
    break;
}

// console.log(graph.vertices);
curPath = +start;
// console.log(curPath);
graph.findMaxPath(+start, -1);
curPath = next;
// console.log(curPath);
graph.findMaxPath(next, -1);
print(maxPath);
