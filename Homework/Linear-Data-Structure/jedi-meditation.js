const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const jedies = gets().split(' ');
const m = [];
const k = [];
const p = [];

// print(n);
// print(jedies);

for (let i = 0; i < jedies.length; i++) {
    if (jedies[i].indexOf('M') > -1) {
        m.push(jedies[i]);
    }
    if (jedies[i].indexOf('K') > -1) {
        k.push(jedies[i]);
    }
    if (jedies[i].indexOf('P') > -1) {
        p.push(jedies[i]);
    }
}

const result = [];
for (let i = 0; i < m.length; i++) {
    result.push(m[i]);
}
for (let i = 0; i < k.length; i++) {
    result.push(k[i]);
}
for (let i = 0; i < p.length; i++) {
    result.push(p[i]);
}
// print(map);
print(result.join(' '));
