/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */
const pascalsTriangle = (rowIndex) => {
    const result = [];
    for (let i = 0; i <= rowIndex; i++) {
        result[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                result[i][j] = 1;
            } else {
                result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
            }
        }
    }
    return result[rowIndex];
};

/** best solution */
const getRow = (rowIndex) => {
    return findRow([1], rowIndex);
};

const findRow = (arr, depth) => {
    if (arr.length - 1 === depth) {
        return arr;
    }

    const newArr = new Array(arr.length + 1);

    for (let i = 0; i < newArr.length; i++) {
        const l = arrpi - 1] || 0;
        const r = arr[i] || 0;
        newArr[i] = l + r;
    }
}