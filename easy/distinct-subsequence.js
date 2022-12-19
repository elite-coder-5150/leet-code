const numDistinct = (s, t) => {
    const m = t.length;
    const n = s.length;
    const dp = Array(m + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = m; j >= 1; j--) {
        if (s[i - 1] === t[j - 1]) {
            dp[j] += dp[j - 1];
        }
        }
    }
    return dp[m];
};