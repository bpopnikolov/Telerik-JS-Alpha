const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const numberOfCommands = +gets();

class DepGraph {
    constructor() {
        this.deps = {};
        this.incomingEdges = {};
        this._verticesCount = 0;
    }

    addVertix(vertix, child) {
        if (!this.hasVertix(vertix)) {
            this.deps[vertix] = [];
            this.deps[vertix].push(child);
        } else {
            this.deps[vertix].push(child);
        }

        if (this.incomingEdges.hasOwnProperty(child)) {
            this.incomingEdges[child] += 1;
        } else {
            this.incomingEdges[child] = 1;
            this._verticesCount += 1;
        }
        if (!this.incomingEdges.hasOwnProperty(vertix)) {
            this.incomingEdges[vertix] = 0;
            this._verticesCount += 1;
        }
    }

    _findBest(used) {
        const candidates = [];
        for (const v in this.incomingEdges) {
            if (this.incomingEdges[v] === 0 && !used.includes(v) ) {
                candidates.push(v);
            }
        }
        candidates.sort();
        return candidates[0];
    }

    // topological sort of a graph
    loadResources() {
        const used = [];

        while (used.length < this._verticesCount) {
            const bestV = this._findBest(used);
            used.push(bestV);

            if (this.deps.hasOwnProperty(bestV)) {
                for (const child of this.deps[bestV]) {
                    this.incomingEdges[child] -= 1;
                }
            }
        }
        return used;
    }

    hasVertix(vertix) {
        return this.deps.hasOwnProperty(vertix);
    }
}

const graph = new DepGraph();

for (let i = 0; i < numberOfCommands; i++) {
    const [x, y] = gets().split(' needs ');
    graph.addVertix(x, y);
}

print(graph.loadResources().join(' '));

