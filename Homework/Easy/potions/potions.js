const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [pots, liters] = gets().split(' ').map((x) => +x);

const p = [];
// p[1] = 1;
p[2] = 2;

for (let i = 3; i <= pots; i += 1) {
    p[i] = p[i - 1] + p.indexOf(p[i - 1]);

    if ((p[i]) >= liters) {
        print(p.indexOf(p[i]) % 2 === 0 ? p.indexOf(p[i]) + 1 : p.indexOf(p[i]));
        break;
    }
}



// 1 2 3 4  5  6   7   8   9  10
// 1 2 4 7 11 16  23  31  40  50
