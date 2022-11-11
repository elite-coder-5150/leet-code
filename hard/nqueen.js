/**
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no
 * two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 *
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both
 * indicate a queen and an empty space, respectively.
 */
const solveNQueens = (n) => {
    const res = [];
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    const isValid = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    };
    const backtrack = (row) => {
        if (row === n) {
            res.push(board.map((row) => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) {
                continue;
            }
            board[row][col] = 'Q';
            backtrack(row + 1);
            board[row][col] = '.';
        }
    };
    backtrack(0);
    return res;
}