const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, k] = gets().split(' ').map((x) => +x);

const combinations = (n, k) => {
    combinationsHelper(n, k, 0, []);
};

const combinationsHelper = (n, k, i, comb) => {
    if (i === k) {
        print(comb.join(' '));
        return;
    }

    const start = i === 0 ? 1 : comb[i - 1];
    for (let j = start; j <= n; j++) {
        comb[i] = j;
        combinationsHelper(n, k, i + 1, comb);
    }
};

combinations(n, k);
