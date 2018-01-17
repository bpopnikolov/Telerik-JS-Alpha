/* globals Set */
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `7
8 4 7 5 6 10 9`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;


gets();

let table = gets().split(' ').map((x) => +x);
let days = 0;

while (true) {
    const ate = new Set();
    for (let i = 0; i < table.length - 1; i++) {
        // console.log(table[i], table[i + 1]);
        if (table[i] < table[i + 1]) {
            ate.add(i + 1);
        }
    }

    table = table.filter((x, i) => !ate.has(i));
    // console.log(table);
    // break;
    if (ate.size === 0) {
        break;
    }
    days++;
}
print(days);

