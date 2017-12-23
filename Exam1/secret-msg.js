const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let encoded = gets();
const stack = [];


let result = '';
for (let i = 0; i < encoded.length; i++) {
    if (encoded[i] === '{') {
        stack.push(i);
    }
    if (encoded[i] === '}') {
        const start = stack.pop();

        const replaceWith = encoded.substring(start + 1, i).repeat(encoded[start - 1]);
        console.log(replaceWith);
        encoded = encoded.replace(encoded.substring(start - 1, i + 1), replaceWith);
        print(encoded);
    }
}

