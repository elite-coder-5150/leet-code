/** given a string s consisting of words and spaces, return the length of the
 * last word in the string. if the last word does not exist, return 0.
 *
 * a word is a maximal substring consisting of non-space characters only.
 */
const lengthOfLastWord = (s) => {
    let count = 0;
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    while (i >= 0 && s[i] !== ' ') {
        i--;
        count++;
    }
    return count;
}