const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

gets();
const numbers = gets().split(' ');
const sorted = numbers.slice().sort((a, b) => b - a);
const map = {};


// for (let i = 0; i < numbers.length; i++) {
//     map.set(numbers[i], sorted.indexOf(numbers[i]) + 1);
// }

// print([...map.values()].join(' '));

for (let i = 0; i < numbers.length; i++) {
    map[sorted[i]] = i + 1;
}

const result = [];

for (let j = 0; j < sorted.length; j++) {
    if (map.hasOwnProperty(sorted[j])) {
        map[sorted[j]] = j + 1;
        result.push(map[numbers[j]]);
    }
}

print(result.join(' '));
