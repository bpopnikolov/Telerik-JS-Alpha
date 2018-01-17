/* globals Set */

const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `3
4 2
3 1
5 7
6
1
2
3
4
5
7`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class DepGraph {
    constructor(nodes) {
        this.deps = {};
        this.outGoingEdges = {};
    }

    addVertex(vertex, child) {
        if (!this.hasVertex(vertex)) {
            this.deps[vertex] = [];
            this.deps[vertex].push(child);
        } else {
            this.deps[vertex].push(child);
        }
        if (typeof this.deps[child] === 'undefined') {
            this.deps[child] = [];
        }
    }


    //  p is the package which deps we want to get
    getDeps(p, installed) {
        installed.add(p);

        for (const dep of this.deps[p]) {
            if (installed.has(dep)) {
                continue;
            }
            this.getDeps(dep, installed);
        }
    }


    hasVertex(vertex) {
        return typeof this.deps[vertex] !== 'undefined';
    }
}

// number of deps
const n = +gets();
let k = 0;
const graph = new DepGraph();
const installed = new Set();
for (let i = 0; i < n; i++) {
    const edge = gets().split(' ');
    graph.addVertex(edge[0], edge[1]);
}

k = +gets();

for (let i = 0; i < k; i++) {
    const input = +gets();
    // console.log(input);
    graph.getDeps(input, installed);
    print([...installed].sort((a, b) => a - b).join(' '));
    installed.clear();
}
