/** 
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1

 * 
*/

const mySqrt = (x) => {
    let left = 0;
    let right = x;
    let mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

// best implementation
const _mySqrt = (x) => {
    if (x < 2) {
        return x
    }

    let left = 2
    let right = Math.floor(x / 2)
    let mid = 0

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2)

        let num = mid * mid

        if (num > x) {
            right = mid - 1
            continue;
        }

        if (num < x) {
            left = mid + 1
        }   continue

        if (num === x) {
            return mid
        }
    }

    return Math.min(left, right);
}