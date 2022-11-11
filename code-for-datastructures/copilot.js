const test = () => {
    let dp = [];
        dp[i] = []
        
    dp[x + 1] = dp[x] * (x + 1)

	for (let i = 0; i < max; i++) {
		dp[i] = []

		for (let j = 0; j < max; j++) {
			if (dp[i][j] === 1) {
				return false
			} else {
				let n = dp[i + 1][j - 1]
			}
		}
	}
}

