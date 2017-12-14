const fibonacci = (num, memo) => {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
    memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);

    return memo[num];
};


// const fibonacci = (num) => {
//     let a = 1;
//     let b = 0;

//     while (num >= 0) {
//         [a, b] = [a + b, a];
//         num--;
//     }

//     return b;
// };
