/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 */
const pascalsTriangle = (numRows) => {
    const result = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < row.length - 1; j++) {
            // calculate the sum of the rows directly above.
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(row);
    }
    return result;
}

pascalsTriangle(16);