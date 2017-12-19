/* globals Map */

// const gets = this.gets || require('readline-sync').question;
// const print = this.print || console.log;

// const msg = gets();
// const ciphers = new Map();
// const decodedMsgs = [];
// const rgx = new RegExp(/(\D\d+)/);

// gets().split(rgx).map((x) => {
//     if (x !== '') {
//         const keyName = x.match(/\D/);
//         const keyValue = x.match(/\d+/);
//         ciphers.set(keyName[0], keyValue[0]);
//     }
// });


// const decode = (encoded, decoded) => {
//     if (encoded.length === 0) {
//         decodedMsgs.push(decoded);
//     }

//     for (const [key, value] of ciphers) {
//         if (encoded.startsWith(value)) {
//             decode(encoded.substring(value.length), decoded + key);
//         }
//     }
// };

// decode(msg, '');

// print(decodedMsgs.length);
// decodedMsgs.sort().forEach((m) => {
//     print(m);
// });


/* MAP DOESN'T PASS THE MEMORY LIMITS IN JUDGE!*/

const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const msg = gets();
const ciphers = {};
const decodedMsgs = [];
const rgx = new RegExp(/(\D\d+)/);

gets().split(rgx).map((x) => {
    if (x !== '') {
        const keyName = x.match(/\D/);
        const keyValue = x.match(/\d+/);
        ciphers[keyName[0]] = keyValue[0];
    }
});

const decode = (encoded, decoded) => {
    if (encoded.length === 0) {
        decodedMsgs.push(decoded);
    }

    for (const cipher in ciphers) {
        if (encoded.startsWith(ciphers[cipher])) {
            decode(encoded.substring(ciphers[cipher].length), decoded + cipher);
        }
    }
};

decode(msg, '');

print(decodedMsgs.length);
decodedMsgs.sort().forEach((m) => {
    print(m);
});
