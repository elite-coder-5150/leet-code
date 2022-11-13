const minCut = s => {
    const isPalindrome = (s, i, j) => {
        while (i < j) {
        if (s[i] !== s[j]) return false
        i++
        j--
        }
        return true
    }
    const dp = Array(s.length + 1).fill(0)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = i - 1
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
        if (isPalindrome(s, j, i - 1)) {
            dp[i] = Math.min(dp[i], dp[j] + 1)
        }
        }
    }
    return dp[s.length]
    }