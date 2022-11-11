/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
 * non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters 
 * and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */
const isPalindrome = (s) => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!isAlphaNumeric(s[i])) {
            i++;
        } else if (!isAlphaNumeric(s[j])) {
            j--;
        } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
}

const isAlphaNumeric = (char) => {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
}