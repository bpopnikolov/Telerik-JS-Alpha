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

// const insertionSort = (arr) => {
//     const sorted = Array(arr.length).fill(0);

//     for (let i = 0; i < arr.length; i++) {
//         let j;
//         for (j = 0; j < i; j++) {
//             if (arr[i] < sorted[j]) {
//                 break;
//             }
//         }

//         // for (let k = i; k > j; k--) {
//         //     sorted[k] = sorted[k - 1];
//         // }

//         // instead of shifting with loop just pop() and insert at j;
//         sorted.pop();
//         sorted.splice(j, 0, arr[i]);
//     }
//     return sorted;
// };

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
        // console.log(arr);
    }
};
insertionSort(randomArr);
console.log(randomArr);
