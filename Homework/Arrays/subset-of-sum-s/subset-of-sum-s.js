const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const s = +gets();
const numbers = gets().split(' ').map((x) => +x);

numbers.sort((a, b) => a - b);


const subsetSum = (arr, sum) => {
    let currSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currSum = arr[i];
        for (let j = i + 1; j <= arr.length; j++) {
            if (currSum === sum) {
                return 'yes';
            }
            if (currSum > sum || j === arr.length) {
                break;
            }
            currSum = currSum + arr[j];
        }
        currSum = 0;
    }
    return 'no';
};

print(subsetSum(numbers, s));
