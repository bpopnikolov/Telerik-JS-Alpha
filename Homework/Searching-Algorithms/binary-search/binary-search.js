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

const min = 1;
const max = 10;
const randomArr1 = generateRandomArray(min, max);
const randomArr = [1, 4, 7, 7, 7, 10, 13, 13, 13, 13, 15, 34, 55, 59, 66];
console.log(randomArr);

const binarySearch = (arr, value) => {
    let middle;
    let left = 0;
    let right = arr.length;
    while (left < right) {
        middle = ((left + right) / 2) | 0;

        if (value < arr[middle]) {
            right = middle;
        } else if (value > arr[middle]) {
            left = middle + 1;
        } else {
            return middle;
        }
    }

    return -1;
};

const binarySearchRecursive = (arr, value) => {
    const left = 0;
    const right = arr.length;

    const binarySearchRecursiveHelper = (arr, value, left, right) => {
        if (left >= right) {
            return -1;
        }

        const middle = (left + right) / 2 | 0;

        if (value < arr[middle]) {
            return binarySearchRecursiveHelper(arr, value, left, middle);
        }
        if (value > arr[middle]) {
            return binarySearchRecursiveHelper(arr, value, middle + 1, right);
        }

        return middle;
    };

    return binarySearchRecursiveHelper(arr, value, left, right);
};

const lowerBound = (arr, value) => {
    return bound(arr, (mid) => value <= mid);
};

const upperBound = (arr, value) => {
    return bound(arr, ((mid) => value < mid));
};

const bound = (arr, compare) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const middle = (left + right) / 2 | 0;

        // lowerBound = value <= arr[mid];
        // upperBound = value < arr[mid];
        if (compare(arr[middle])) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return left;
};

const binarySearchSort = (arr) => {
    const sorted = [];

    for (const value of arr) {
        const index = upperBound(sorted, value);
        console.log(index);
        sorted.splice(index, 0, value);
    }
    arr = arr.splice(0, arr.length, ...sorted);
};

console.log(binarySearch(randomArr, 4));
console.log(binarySearchRecursive(randomArr, 4));
console.log(lowerBound(randomArr, 7));
console.log(upperBound(randomArr, 7));
console.log(randomArr1);
binarySearchSort(randomArr1);
console.log(randomArr1);
