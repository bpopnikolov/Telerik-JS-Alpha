const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const k = +gets();
const dp = Array(n + k).fill(0);

dp[1] = k - 1;
dp[2] = k * (k - 1);

for (let i = 3; i <= n; i++) {
    dp[i] = (k - 1) * dp[i - 1] + (k - 1) * dp[i - 2];
    console.log(dp[i]);
}
print(dp[n]);
