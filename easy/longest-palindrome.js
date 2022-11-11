const longestPalindrome = (s) => {
    let longest = 0;
    let longestString = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            const substring = s.substring(i, j);
            if (isPalindrome(substring) && substring.length > longest) {
                longest = substring.length;
                longestString = substring;
            }
        }
    }
    return longestString;
};

const isPalindrome = (s) => {
    const reversed = s.split('').reverse().join('');
    return s === reversed;
}

const longestPalindromeSubstr = (s) => {
    let n = s.length;

    let maxLength = 1, start = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let flag = 1;

            for (let k = 0; k < (j - i + 1) / 2; k++) {
                if (s[i + k] !== s[j - k]) {
                    flag = 0;
                }
            }

            if (flag && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }

        return maxLength
    }