const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const encoded = gets().split('');
const stack = [];

let i = 0;
while (i < encoded.length) {
    if (encoded[i] === '{') {
        stack.push(i);
    }

    if (encoded[i] === '}') {
        const startIndex = stack.pop();
        let repeater = '';

        let j = startIndex - 1;

        while (!isNaN(+encoded[j])) {
            repeater = encoded[j] + repeater;
            j -= 1;
        }

        encoded[i] = encoded.slice(startIndex + 1, i).join('').repeat(+repeater);

        for (let k = startIndex - repeater.length; k < i; k++) {
            encoded[k] = '';
        }
    }

    i += 1;
}
print(encoded.join(''));
