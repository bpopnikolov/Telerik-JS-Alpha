const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const allDigits = gets();
const value = +gets();

const makeExpressions = (digits, target) => {
    let final = [];

    if (!digits || digits.length === 0) {
        return final;
    }

    const addOperators = (num, start, tar, curSum, preNum, curResult, result) => {

        if (start === num.length && curSum === tar) {
            result.push(curResult);
            return;
        }
        if (start === num.length) {
            return;
        }

        for (let i = start; i < num.length; i++) {
            const curStr = num.substring(start, i + 1);
            if (curStr.length > 1 && curStr[0] === '0') {
                break;
            }

            const curNum = parseInt(curStr, 10);

            if (curResult.length === 0) {
                addOperators(num, i + 1, target, curNum, curNum, curStr, result);
            } else {
                // Multiply
                addOperators(num, i + 1, target, curSum - preNum + preNum * curNum,
                    preNum * curNum, curResult + '*' + curNum, result);

                // Add
                addOperators(num, i + 1, target, curSum + curNum, curNum,
                    curResult + '+' + curNum, result);

                // Subtract
                addOperators(num, i + 1, target, curSum - curNum, -curNum,
                    curResult + '-' + curNum, result);
            }
        }
    };

    addOperators(digits, 0, target, 0, 0, '', final);

    return final;
};

print(makeExpressions(allDigits, value));
