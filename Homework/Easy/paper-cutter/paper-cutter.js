const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let n = +gets();
const sizes = Array.from({
    length: 11,
}, (x, i) => 2 ** i);

const highestPowerOf2 = (n) => {
    return Math.trunc(Math.log2(n));
};

while (n > 0) {
    const size = highestPowerOf2(n);
    n -= sizes[size];
    sizes[size] = 0;
}

const length = sizes.length - 1;

for (let i = length; i >= 0; i--) {
    if (sizes[i] !== 0) {
        print(`A${length - i}`);
    }
}
