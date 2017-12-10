const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const numbers = gets().split(' ').map((x) => +x);

const [a, b] = [...numbers];

const gcd = (x, z) => {
    if (x < z) {
        [x, z] = [z, x];
    }

    if (x % z === 0) {
        return z;
    }

    return gcd(z, (x % z));
};

print(gcd(a, b));
