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

const partition = (arr, left, right) => {
    const pivot = arr[((right + left) / 2) | 0];
    // stop when pointers crossover
    while (left <= right) {
        // move left pointer till element at left  < pivot
        while (arr[left] < pivot) {
            left++;
        }
        // move right pointer till element at right index > pivot
        while (pivot < arr[right]) {
            right--;
        }

        // we have found element at right smaller than pivot and element at left bigger than pivot
        // swap them and move both pointers with 1
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return left;
};

const quickSort = (arr, left, right) => {
    if (arr.length > 1) {
        left = typeof left !== 'number' ? 0 : left;
        right = typeof right !== 'number' ? arr.length - 1: right;
        const index = partition(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }
    }

    return arr;
};

quickSort(randomArr);
console.log(randomArr);
