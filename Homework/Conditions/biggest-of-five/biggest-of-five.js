const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();
const d = +gets();
const e = +gets();

const biggestOfFive = (x, y, z, w, q) => {

    if (x > y && x > z && z > w && x > q) {
        return x;
    }
    if (y > x && y > z && y > w && y > q) {
        return y;
    }
    if (z > x && z > y && z > w && z > q) {
        return z;
    }
    if (w > x && w > y && w > z && w > q) {
        return w;
    }

    return q;
};

print(biggestOfFive(a, b, c, d, e));
