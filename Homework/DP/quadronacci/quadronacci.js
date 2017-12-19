const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const sequence = [+gets(), +gets(), +gets(), +gets()];
const r = +gets();
const c = +gets();

const quadResult = [];
const quadronacci = (n) => {
    quadResult[0] = sequence[0];
    quadResult[1] = sequence[1];
    quadResult[2] = sequence[2];
    quadResult[3] = sequence[3];
    for (let i = 4; i < n; i++) {
        quadResult[i] = quadResult[i - 1] + quadResult[i - 2] + quadResult[i - 3] + quadResult[i - 4];
    }
};
quadronacci(r * c);

for (let i = 0; i < quadResult.length; i += c) {
    print(quadResult.slice(i, i + c).join(' '));
}

// console.log(result);
