const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const tubes = +gets();
const friends = +gets();
const sizes = Array(tubes).fill().map((x) => +gets());

// console.log(tubes, friends, sizes);

const maxTube = Math.max(...sizes);
let r = maxTube;
let l = 1;
let middle = ((l + r) / 2) | 0;

let max = -1;

while (l <= r) {
    let eventually = 0;

    for (let i = 0; i < sizes.length; i++) {
        eventually += (sizes[i] / middle) | 0;
    }
    if (eventually < friends) {
        r = middle - 1;
    } else if (eventually >= friends) {
        l = middle + 1;
        max = middle;
    }
    middle = ((l + r) / 2) | 0;
}

print(max);

