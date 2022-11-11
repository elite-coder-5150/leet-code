/**
 * given two binary strings a and b, return their sum as a binary string.
 *
 */
const addBinary = (a, b) => {
    let sum = 0;
    let carry = 0;
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0) {
        sum = carry;
        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2);
    }
    if (carry !== 0) {
        result = carry + result;
    }
    return result;
}

addBinary();