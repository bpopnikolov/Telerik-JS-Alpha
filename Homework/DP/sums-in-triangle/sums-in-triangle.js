const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const testCases = +gets();
console.log('cases ' + testCases);

for (let test = 0; test < testCases; test++) {
    const triangleHeight = +gets();
    const triangle = Array(triangleHeight).fill([]);
    console.log('height ' + triangleHeight);
    console.log(triangle);
    for (let row = 0; row < triangleHeight; row++) {
        if (row === 0) {
            triangle[row].push(gets());
            continue;
        }
        triangle[row] = gets().split(' ').map((x) => +x);
    }
    console.log(triangle);
}
