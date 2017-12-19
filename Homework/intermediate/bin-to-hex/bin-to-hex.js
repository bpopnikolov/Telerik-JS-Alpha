const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let n = gets();
const binToHexDict = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F',
};

if (n.length % 4 !== 0) {
    for (let i = n.length % 4; i < 4; i++) {
        n = '0' + n;
    }
}

const result = [];
for (let i = 0; i < n.length; i+=4) {
    result.push(binToHexDict[n.substring(i, i + 4)]);
}
print(result.join(''));
