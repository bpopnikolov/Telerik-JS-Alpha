const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

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

const randomArr = generateRandomArray(1, 8);
console.log(randomArr);

const merge = (left, right) => {
    const result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++;
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const middle = (arr.length / 2) | 0;

    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(randomArr));

