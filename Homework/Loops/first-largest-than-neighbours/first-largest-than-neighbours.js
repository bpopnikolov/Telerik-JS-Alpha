const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const numbers = gets().split(' ').map((x) => +x);

// print(numbers);

const findLargestNeighbours = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {

        if (i === 0 && numbers[i] > numbers[i + 1]) {
            return i;
        }

        if (i === arr.length - 1 && numbers[i] > numbers[i - 1]) {
            return i;
        }

        if (i > 0 && i < n - 1) {
            if (numbers[i - 1] < numbers[i] && numbers[i + 1] < numbers[i]) {
                return i;
            }
        }
    }
    return -1;
};

print(findLargestNeighbours(numbers));
