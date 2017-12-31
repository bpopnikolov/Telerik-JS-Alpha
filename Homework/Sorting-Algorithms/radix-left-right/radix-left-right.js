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

// const min = 1;
// const max = 1000;
// const randomArr = generateRandomArray(min, max);
let randomArr = [103, 320, 13, 26, 114, 111, 3];
console.log(randomArr);

const radixLeftToRight = (arr, digit, base) => {
    let power = 1;
    for (let i = 1; i < digit; i++) {
        power *= base;
    }

    radixLeftToRightHelper(arr, digit, power, base);
};

const radixLeftToRightHelper = (arr, digit, basePower, base) => {
    if (digit === 0) {
        return;
    }
    let buckets = Array.from({
        length: base,
    }, (x) => []);


    for (let i = 0; i < arr.length; i++) {
        const currentDigit = Math.trunc(arr[i] / basePower) % base;
        buckets[currentDigit].push(arr[i]);
    }

    for (const bucket of buckets) {
        radixLeftToRightHelper(bucket, digit - 1, Math.trunc(basePower / base), base);
        // bucket.sort((a, b) => a > b);
    }

    buckets = buckets.reduce((a, b) => a.concat(b), []);

    // change array elements
    // way 1
    // arr.length = 0;
    // arr.push(...buckets);
    // way 2
    // arr = arr.splice(0, arr.length, ...buckets);
    // way 3
    Array.prototype.splice.apply(arr, [0, arr.length].concat(buckets));
    // way 4
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = buckets[i];
    // }
};

radixLeftToRight(randomArr, 3, 10);
console.log(randomArr);
