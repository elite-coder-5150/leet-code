/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 */
const reverse = (x) => {
    const isNegative = x < 0;
    const reversed = parseInt(x.toString().split('').reverse().join(''), 10);
    return isNegative ? -reversed : reversed;
};