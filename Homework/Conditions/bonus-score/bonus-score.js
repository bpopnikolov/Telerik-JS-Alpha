const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();

const bonusScore = (score) => {
    if (!(n < 1 || n > 9)) {
        if (n > 0 && n < 4) {
            return n * 10;
        }
        if (n > 3 && n < 7) {
            return n * 100;
        }
        return n * 1000;
    }

    return 'invalid score';
};

print(bonusScore(n));
