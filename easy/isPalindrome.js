/**
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward 
 * as forward.
 *
 * For example, 121 is a palindrome while 123 is not.
 */
const isPalindrome = (x) => {
    const str = x.toString();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
        return false;
        }
    }
    return true;
}