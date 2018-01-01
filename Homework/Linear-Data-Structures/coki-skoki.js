const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const numbers = gets().split(' ').map((x) => +x);


// console.log(n, numbers);
let counter = 0;
let max = 0;
const result = [];

for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    if (i === numbers.length - 1) {
        result.push(counter);
    }
    for (let j = i + 1; j < numbers.length; j++) {
        // console.log(current, numbers[j]);
        if (current < numbers[j]) {
            counter++;
            current = numbers[j];
            // console.log(counter);
        }

        if (j === numbers.length - 1) {
            // console.log('pushed');
            result.push(counter);
            if (max < counter) {
                max = counter;
            }
            counter = 0;
        }
    }

}
print(max);
print(result.join(' '));

// Not working
// let results = Array(n);
// const jump = (start, arr) => {
//     console.log(start, arr);
//     const stack = [];
//     let current = start;
//     let next = current + 1;
//     let counter = 0;

//     while (next < arr.length) {
//         console.log(current, next);
//         if (arr[current] < arr[next] && current < arr.length - 1) {
//             console.log('i work');
//             stack.push(arr[current]);
//             console.log(stack);
//             counter++;
//             current = next;
//             next += 1;
//             continue;
//         }

//         jump(next, arr);
//         console.log('jump next');
//         next += 1;

//     }
//     stack.push(numbers[current]);
//     counter++;
//     console.log(counter);
//     const len = stack.length;
//     for (let i = 0; i < len; i++) {
//         const x = stack.pop();
//         if (typeof results[arr.indexOf(x)] !== 'undefined') {
//             results[arr.indexOf(x, )] = len - stack.length - 1;
//             console.log('got out', x, len - stack.length - 1);
//         }
//         results[arr.indexOf(x)] = len - stack.length - 1;
//         console.log('got out', x, len - stack.length - 1);
//     }
// };

// jump(0, numbers);
// results[results.length - 1] = 0;
// console.log(results);
