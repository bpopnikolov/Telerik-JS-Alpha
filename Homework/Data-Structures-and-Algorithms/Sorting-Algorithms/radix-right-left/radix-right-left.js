const randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;

const generateRandomArray = (min, max) => {
    const result = [];
    for (let i = min; i < max; i++) {
        result.push(i);
    }

    for (let i = 0; i < result.length - 1; i++) {
        const randomIndex = randomInt(i + 1, result.length);
        [result[randomIndex], result[i]] = [result[i], result[randomIndex]];
    }

    return result;
};

const min = 1;
const max = 100000;
const randomArr = generateRandomArray(min, max);
// let randomArr = [103, 320, 13, 26, 114, 111, 3];
console.log(randomArr);

// const radixRightToLeft = (arr, digit, base) => {
//     const power = 1;
//     radixRightLeftHelper(arr, digit, power, base);
// };

// const radixRightLeftHelper = (arr, digit, basePower, base) => {
//     if (digit === 0) {
//         return;
//     }
//     let buckets = Array.from({
//         length: base,
//     }, (x) => []);


//     for (let i = 0; i < arr.length; i++) {
//         const currentDigit = Math.floor(arr[i] / basePower) % base;
//         buckets[currentDigit].push(arr[i]);
//     }

//     buckets = buckets.reduce((a, b) => a.concat(b), []);

//     radixRightLeftHelper(buckets, digit - 1, basePower * base, base);

//     // change array elements
//     // way 1
//     // arr.length = 0;
//     // arr.push(...buckets);
//     // way 2
//     // arr = arr.splice(0, arr.length, ...buckets);
//     // way 3
//     Array.prototype.splice.apply(arr, [0, arr.length].concat(buckets));
//     // way 4
//     // for (let i = 0; i < arr.length; i++) {
//     //     arr[i] = buckets[i];
//     // }
// };

// iterative
const radixRightToLeft = (arr, digits, base) => {
    const buckets = Array.from({
        length: base,
    }, (x) => []);

    let basePower = 1;
    for (let digit = 0; digit < digits; digit++) {
        for (let i = 0; i < arr.length; i++) {
            const currentDigit = Math.floor(arr[i] / basePower) % base;
            buckets[currentDigit].push(arr[i]);
        }

        // much faster than code below
        let index = 0;
        for (const bucket of buckets) {
            for (const x of bucket) {
                arr[index] = x;
                index++;
            }
            bucket.length = 0;
        }
        // SLOW!
        // // concat buckets and assign them to arr
        // const be = buckets.reduce((a, b) => a.concat(b));
        // arr.splice(0, arr.length, ...be);
        // // clear buckets
        // buckets.forEach((x) => {
        //     x.length = 0;
        // });
        basePower *= base;
    }
};

// represent randomArr as 3 digit numbers in base 1024
// (or 2 digit numbers in base 65536)
radixRightToLeft(randomArr, 3, 1024);
console.log(randomArr);
