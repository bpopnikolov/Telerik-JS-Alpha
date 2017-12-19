const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();


const map = {};

for (let i = 0; i < n; i += 1) {
    const x = gets();
    if (map[x]) {
        map[x] += 1;
        continue;
    }
    map[x] = 1;
}

for (const key in map) {
    if (map.hasOwnProperty(key)) {
        if (map[key] % 2 !== 0) {
            print(key);
        }
    }
}
