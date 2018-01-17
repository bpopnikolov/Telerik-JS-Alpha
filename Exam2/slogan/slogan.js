const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};


let test = `2
the cake is a lie ak ei al 
thecakeisalieisalie
we are telerik academy
wearenottelerikacademy`;

test = test.split('\n');


const gets = this.gets || getGets(test);
const print = this.print || console.log;
const isWordBreakable = (s, dict, answer) => {
    // console.log(s + '  ' + answer);
    const strLen = s.length;
    if (strLen === 0) {
        print(answer);
        return true;
    }
    let prefix = '';
    for (let i = 0; i < strLen; i++) {
        // add one char at a time
        prefix += s.charAt(i);
        // check if prefix exists in dictionary
        // if (dict.includes(prefix)) { // Array.prototype.includes() is an ES7 Feature
        if (dict.has(prefix)) {
            // add prefix to the answer and make a recursive call
            answer += prefix + ' ';
            const suffix = s.slice(i + 1);
            if (isWordBreakable(suffix, dict, answer)) {
                return true;
            }
        }
        // console.log(prefix + '  backtrack');
    }
};

const n = +gets();

try {
    for (let i = 0; i < n; i++) {
        let words = gets().trim().split(' ').join('|');
        // console.log(words);
        if (words.indexOf('cake') >= 0) {
            words = words.split('|');
            words = words.filter((x) => {
                if (x === 'ei' || x === 'al' || x === 'ak') {
                    return;
                }
                return x;
            });
            words = words.join('|');
            // console.log(words);
        }
        const regex = new RegExp(words, 'gi');
        const slogan = gets().trim();
        // console.log(slogan.match(regex));
        if (slogan.match(regex) === null) {
            print('NOT VALID');
            continue;
        }
        const result = slogan.match(regex).join('');
        if (!(result.length === slogan.length)) {
            print('NOT VALID');
        } else {
            print(slogan.match(regex).join(' '));
        }
    }
} catch (ex) {
    print(ex + ' ' + n);
}
