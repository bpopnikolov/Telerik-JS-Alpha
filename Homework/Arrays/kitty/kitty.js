const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const path = gets().split('');
const mod = path.length;
const steps = gets().split(' ').map((x) => +x);

// print('-'.repeat(30));
// print(path);
// print(steps);
// print('-'.repeat(30));

const kitty = {
    souls: 0,
    food: 0,
    deadlocks: 0,
    jumps: 0,
    position: 0,
    dead: false,
};


const move = (index, s) => {
    if (s < 0) {
        let result = (index + s) % mod;
        if (result < 0) {
            result += mod;
        }
        if (result === -0) {
            return 0;
        }
        return result;
    }

    return (index + s) % mod;
};


if (path[kitty.position] === 'x') {
    kitty.dead = true;
}
if (path[kitty.position] === '@') {
    path[kitty.position] = '_';
    kitty.souls += 1;
}
if (path[kitty.position] === '*') {
    path[kitty.position] = '_';
    kitty.food += 1;
}

// print('initial');
// print(kitty);

for (let i = 0; i < steps.length; i++) {
    if (kitty.dead) {
        break;
    }
    kitty.jumps += 1;
    kitty.position = move(kitty.position, steps[i]);

    // print('~'.repeat(30));
    // print('STEP: ' + (i +1));
    // print('going to: ' + kitty.position);
    // print('---BEFORE---');
    // print(path);
    // print(kitty);
    // print('~'.repeat(30));

    if (path[kitty.position] === '_') {
        continue;
    }
    if (path[kitty.position] === '@') {
        kitty.souls += 1;
        path[kitty.position] = '_';
    }
    if (path[kitty.position] === '*') {
        kitty.food += 1;
        path[kitty.position] = '_';
    }
    if (path[kitty.position] === 'x') {
        kitty.deadlocks += 1;
        if ((kitty.position) % 2 === 0 && kitty.souls > 0) {
            path[kitty.position] = '@';
            kitty.souls -= 1;
            continue;
        }
        if ((kitty.position) % 2 !== 0 && kitty.food > 0) {
            path[kitty.position] = '*';
            kitty.food -= 1;
            continue;
        }

        kitty.dead = true;
    }
    // print('---AFTER---');
    // print(path);
    // print(kitty);
}

// print('------FINAL-------'.repeat(2));
if (kitty.dead) {
    print('You are deadlocked, you greedy kitty! ');
    print(`Jumps before deadlock: ${kitty.jumps}`);
} else {
    print(`Coder souls collected: ${kitty.souls} `);
    print(`Food collected: ${kitty.food} `);
    print(`Deadlocks: ${kitty.deadlocks}`);
}
