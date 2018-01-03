const randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;

const generateRandomArray = (min, max) => {
    const result = [];
    for (let i = min; i < max; i++) {
        result.push(i);
    }

    for (let i = 0; i < result.length -1; i++) {
        const randomIndex = randomInt(i + 1, result.length);
        [result[randomIndex], result[i]] = [result[i], result[randomIndex]];
    }

    return result;
};

const min = -4;
const max = 4;
const randomArr = generateRandomArray(min, max);
console.log(randomArr);

const countingSort = (arr, min, max) => {
    const counts = Array(max - min + 1).fill(0);
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const index = arr[i] - min;
        counts[index]++;
    }

    for (let i = 0; i < counts.length; i++) {
        for (let j = counts[i]; j > 0; j--) {
            result.push(i + min);
        }
    }
    return result;
};
console.log(countingSort(randomArr, min, max));
