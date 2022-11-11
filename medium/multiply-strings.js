/**
 * Given two non-negative integers num1 and num2 represented as strings, 
 * return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */
const multiply = (num1, num2) => {
    const m = num1.length;
    const n = num2.length;
    const pos = new Array(m + n).fill(0);
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = num1[i] * num2[j];
            const p1 = i + j;
            const p2 = i + j + 1;
            const sum = mul + pos[p2];
        
            pos[p1] += Math.floor(sum / 10);
            pos[p2] = sum % 10;
        }
    }
    
    while (pos[0] === 0) {
        pos.shift();
    }
    
    return pos.length === 0 ? '0' : pos.join('');
};

// best solution
const _multiply = (num1, num2) => {
    return (BigInt(num1) * BigInt(num2)).toString();
}