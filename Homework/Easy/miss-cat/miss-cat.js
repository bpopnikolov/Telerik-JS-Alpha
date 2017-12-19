const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
// console.log(cats);
const map = {};


for (let i = 0; i < n; i++) {
    const currentCat = gets();
    if (typeof map[currentCat] === 'undefined') {
        map[currentCat] = 0;
    }
    map[currentCat] += 1;
}
// console.log(map);

let winner = Number.MAX_SAFE_INTEGER;
let cur = 0;
for (const cat in map) {
    if (map.hasOwnProperty(cat)) {
        if (+cat < winner || map[cat] > cur) {
            winner = +cat;
            cur = map[cat];
        }
    }
}
print(winner);
