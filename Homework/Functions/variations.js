const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const generateVariations = (inputArr) => {
    const result = [];

    const variate = (arr, m = []) => {
        if (m.length === k) {
            result.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                variate(curr.slice(), m.concat(next));
            }
        }
    };

    variate(inputArr);
    return result;
};

const [n, k] = gets().split(' ').map((x) => +x);
const input = [];

for (let i = 1; i <= n; i++) {
    input.push(i);
}


const perms = generateVariations(input);

perms.forEach((x) => {
    print(x.join(' '));
});
