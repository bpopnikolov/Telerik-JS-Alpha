const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

let test = `18 30
1 17
11 4
1 8 15
1 9 1
1 14 100
2 4 100
2 8 10
2 9 100
3 9 100
3 10 3
3 14 1
4 9 1
4 10 3
4 11 1
5 11 6
5 16 7
6 7 1
6 11 1
6 15 7
6 16 1
7 11 3
7 15 2
7 18 1
8 18 1
10 12 4
10 13 6
11 12 5
12 13 10
12 17 100
13 14 2
15 16 10
16 17 2`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;


// n is the number of nodes and m is the number of edges
const [n, m] = gets().split(' ').map((x) => +x);
// console.log(n, m);
// start is the starting point, final is the end point
const [startCity, final] = gets().split(' ').map((x) => +x);
// console.log(startCity, final);
// m1 and m2 are the points we have to pass first before going to final
const [m1, m2] = gets().split(' ').map((x) => +x);
// console.log(m1, m2);


const dist = Array(n).fill().map((x) => Array(n).fill(Infinity));

// fill the diagonal with zeros
for (let i = 0; i < dist.length; i++) {
    for (let j = 0; j < dist[i].length; j++) {
        if (i === j) {
            dist[i][j] = 0;
        }
    }
}

for (let i = 0; i < m; i++) {
    const input = gets();

    const edge = input.split(' ').map((x) => +x);
    dist[edge[0] - 1][edge[1] - 1] = edge[2];
    dist[edge[1] - 1][edge[0] - 1] = edge[2];
}
// console.log(dist);
// console.log(dist.length);

// print initial graph
// for (let i = 0; i < dist.length; i++) {
//     console.log(dist[i].join(' '));
// }
// console.log('------------');

// Floyd algorithm
for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (dist[i][k] + dist[k][j] < dist[i][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}
// console.log('---------');

// print all pair shortest path graph
for (let i = 0; i < dist.length; i++) {
    console.log(dist[i].join(' '));
}


print(Math.min(dist[startCity - 1][m1 - 1] + dist[m2 - 1][final - 1],
        dist[startCity - 1][m2 - 1] + dist[m1 - 1][final - 1]) +
    dist[m2 - 1][m1 - 1]);
