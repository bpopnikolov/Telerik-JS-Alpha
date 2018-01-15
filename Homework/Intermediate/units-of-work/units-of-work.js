/* globals Set */
const BinarHeap = require('../Data-Structures-and-Algorithms/Data-Structures/binary-heap/binary-heap');
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `add TheMightyThor God 100
add Artanis Protoss 250
add Fenix Protoss 200
add Spiderman MutatedHuman 180
add XelNaga God 500
add Wolverine MutatedHuman 200
add Zeratul Protoss 300
add Spiderman MutatedHuman 180
power 3
find Protoss
find God
remove Kerrigan
remove XelNaga
power 3
find Kerrigan
find God
end`;

test = test.split('\n');

const gets = this.gets || getGets(test);
const print = this.print || console.log;

class HeroesOfTheStorm {
    constructor() {
        this.heroes = {};
        this.dpsRankList = [];
    }

    addHero(name, race, dps) {
        // console.log(name, race, dps);
        if (typeof this.heroes[name] === 'undefined') {
            this.heroes[name] = {
                race: race,
                dps: dps,
            };
            this.dpsRankList.push({
                name: name,
                race: race,
                dps: dps,
            });
            return `SUCCESS: ${name} added!`;
        }
        return `FAIL: ${name} already exists!`;
    }

    find(value) {
        if (typeof this.heroes[value] !== 'undefined') {
            return `RESULT: ${value}[${this.heroes[value].race}](${this.heroes[value].dps})`;
        }

        const foundHeroes = [];
        Object.entries(this.heroes).forEach((x) => {
            if (x[1].race === value) {
                foundHeroes.push(`${x[0]}[${x[1].race}](${x[1].dps})`);
            }
        });


        return foundHeroes.join(', ');
    }
}

const game = new HeroesOfTheStorm();
const result = [];
for (;;) {
    const input = gets().split(' ');
    if (input[0] === 'add') {
        result.push(game.addHero(input[1], input[2], +input[3]));
        continue;
    } else if (input[0].startsWith('find')) {
        // console.log('find');
        result.push('RESULT: ' + game.find(input[1]));
        continue;
    } else if (input[0] === 'power') {
        continue;
    } else if (input[0] === 'remove') {
        continue;
    } else {
        break;
    }
}

result.forEach((x) => console.log(x));

