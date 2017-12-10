const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const numbers = gets().split(' ').map((x) => +x);

// print(numbers);

for (let i = 0; i < numbers.length - 1; i++) {

    if (i === 0 && numbers[i] > numbers[i + 1]) {
        print(numbers.indexOf(numbers[i]));
        break;
    }

    if (i === numbers.length - 1 && numbers[i] > numbers[i - 1]) {
        print(numbers.indexOf(numbers[i]));
        break;
    }

    if (i > 0 && i < n - 1) {
        if (numbers[i - 1] < numbers[i] && numbers[i + 1] < numbers[i]) {
            print(numbers.indexOf(numbers[i]));
            break;
        }
    }
}


