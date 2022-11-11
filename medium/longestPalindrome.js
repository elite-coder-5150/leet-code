/**
 * Given a string s, return the longest palindromic substring in s.
 *
 * A string is called a palindrome string if the reverse of that string is the same as the original string.
 *
 */
const longestPalindrome = (s) => {
    let n = s.length
    let maxLength = 1, start = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let flag = 1
            for (let k = 0; k < (j - i + 1) / 2; k++) {
                if (s[i + k] !== s[j - k]) {
                    flag = 0

                }
            }
            if (flag && (j - i + 1) > maxLength) {
                start = i
                maxLength = j - i + 1
            }
        }
    }

    return maxLength
}