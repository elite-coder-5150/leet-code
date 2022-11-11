/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.
 *
 * A sudoku solution must satisfy all the following rules:
 *
 * Each of the digits 1-9 must occur exactly once in each row.
 * Each of the digits 1-9 must occur exactly once in each column.
 * Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
 * The '.' character indicates empty cells.
 */
const solveSudoku = (board) => {
    const n = board.length;
    const rows = new Array(n).fill(0).map(() => new Array(n).fill(false));
    const cols = new Array(n).fill(0).map(() => new Array(n).fill(false));
    const boxes = new Array(n).fill(0).map(() => new Array(n).fill(false));
    const getBoxIndex = (row, col) => Math.floor(row / 3) * 3 + Math.floor(col / 3);
    const isValid = (row, col, num) => {
        return !rows[row][num] && !cols[col][num] && !boxes[getBoxIndex(row, col)][num];
    }
    const toggleNum = (row, col, num, toggle) => {
        rows[row][num] = toggle;
        cols[col][num] = toggle;
        boxes[getBoxIndex(row, col)][num] = toggle;
    }
    const solve = (row, col) => {
        if (col === n) {
            col = 0;
            row++;
            if (row === n) {
                return true;
            }
        }
        if (board[row][col] !== '.') {
            return solve(row, col + 1);
        }
        for (let num = 0; num < n; num++) {
            if (isValid(row, col, num)) {
                toggleNum(row, col, num, true);
                board[row][col] = `${num + 1}`;
                if (solve(row, col + 1)) {
                    return true;
                }
                board[row][col] = '.';
                toggleNum(row, col, num, false);
            }
        }
        return false;
    }
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] !== '.') {
                const num = +board[row][col] - 1;
                toggleNum(row, col, num, true);
            }
        }
    }
    solve(0, 0);
    return board;
}
