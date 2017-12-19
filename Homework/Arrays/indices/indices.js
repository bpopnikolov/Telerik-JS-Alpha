const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ').map((x) => +x);

// console.log(n, arr);

let i = 0;
const visited = [];
const result = [];
result.push(i);

while (i < arr.length) {
    i = arr[i];
    visited.push(result[result.length - 1]);
    result.push(i);
    if (i > arr.length) {
        print(result.join(' '));
        break;
    }
    if (i < 0) {
        print(result.join(' '));
    }
    if (visited.includes(arr[i])) {
        // console.log(visited.join(' '));
        // console.log(result.join(' '));
        // console.log(i);
        if (visited[visited.length - 1] === result[result.length - 1]) {
            print(`${result.slice(0, visited.indexOf(arr[i])).join(' ')}(${result.splice(visited.indexOf(arr[i]), 1).join(' ')})`);
            break;
        }
        print(`${result.slice(0, visited.indexOf(arr[i])).join(' ')}(${result.splice(visited.indexOf(arr[i]), result.length).join(' ')})`);
        // print(cycle, arr);
        break;
    }
}

