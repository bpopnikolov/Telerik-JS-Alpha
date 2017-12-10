const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [x, y, z]= gets().split(' ').map((w) => +w);


const getMax = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
};

print(getMax(getMax(x, y), z));
