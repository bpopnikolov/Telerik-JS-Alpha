/* globals Set */
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `11 9
8 4
8 9
5 4
5 10
5 3
7 9
7 1
10 2
1 3`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;



class DepGraph {
    constructor(nodes) {
        this.deps = {};
        this.incomingEdges = {};
        this._verticesCount = nodes;
    }

    addVertex(vertex, child) {
        if (!this.hasVertex(vertex)) {
            this.deps[vertex] = [];
            this.deps[vertex].push(child);
        } else {
            this.deps[vertex].push(child);
        }

        this.incomingEdges[child] += 1;
    }


    doActions() {
        const used = new Set();
        let usedVertices = 0;

        const findBest = (used) => {
            let best = Number.MAX_SAFE_INTEGER;
            for (const v in this.incomingEdges) {
                if (this.incomingEdges[v] === 0 && !used.has(+v)) {
                    if (+v < best) {
                        best = +v;
                   }
                }
            }
            usedVertices++;
            return best;
        };

        while (usedVertices < this._verticesCount) {
            const bestV = findBest(used);
            used.add(bestV);

            if (typeof this.deps[bestV] !== 'undefined') {
                for (const child of this.deps[bestV]) {
                    this.incomingEdges[child] -= 1;
                }
            }
        }

        return used;
    }

    hasVertex(vertex) {
        return typeof this.deps[vertex] !== 'undefined';
    }
}


const [n, m] = gets().split(' ').map((x) => +x);
const graph = new DepGraph(n);

for (let i = 0; i < n; i++) {
    graph.incomingEdges[i] = 0;
}

for (let i = 0; i < m; i++) {
    const [u, v] = gets().split(' ');
    graph.addVertex(u, v);
}


[...graph.doActions()].forEach((x) => {
    print(x);
});

