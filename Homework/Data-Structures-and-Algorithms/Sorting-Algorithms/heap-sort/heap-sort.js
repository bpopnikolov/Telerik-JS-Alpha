const randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;

const generateRandomArray = (min, max, elements) => {
    const result = [];
    for (let i = 1; i < elements; i++) {
        result.push(randomInt(min, max));
    }

    for (let i = 0; i < result.length - 1; i++) {
        const randomIndex = randomInt(i + 1, result.length);
        [result[randomIndex], result[i]] = [result[i], result[randomIndex]];
    }

    return result;
};

const min = 1;
const max = 15;
const randomArr = generateRandomArray(min, max, 8);
// let randomArr = [103, 320, 13, 26, 114, 111, 3];
console.log(randomArr);

const heapSort = (arr, cmpFunc) => {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, i, arr[i], cmpFunc, arr.length);
    }
    // print the heap;
    // console.log(arr);

    for (let i = arr.length - 1; i >= 0; i--) {
        const value = arr[i];
        arr[i] = arr[0];
        heapifyDown(arr, 0, value, cmpFunc, i);
    }
};

const heapifyDown = (arr, index, value, cmpFunc, length) => {
    while (index * 2 + 2 < length) {
        const smallestChildIndex = cmpFunc(arr[index * 2 + 1],
                arr[index * 2 + 2]) ?
            index * 2 + 1 :
            index * 2 + 2;
        if (cmpFunc(arr[smallestChildIndex], value)) {
            arr[index] = arr[smallestChildIndex];
            index = smallestChildIndex;
        } else {
            break;
        }
    }

    if (index * 2 + 1 < length) {
        const smallestChildIndex = index * 2 + 1;
        if (cmpFunc(arr[smallestChildIndex] < value)) {
            arr[index] = arr[smallestChildIndex];
            index = smallestChildIndex;
        }
    }
    arr[index] = value;
};

heapSort(randomArr, (a, b) => a > b);
console.log(randomArr);
