class Solution {
    private static final int[][] directions = new int[][] {
        {0. 1},
        {1, 0}
    };

    public int countBattleShipsDFS(char[][] board) {
        if (board == null || board.length == 0 || board[0].length == 0) {
            return 0
        }

        int m = board.length;
        int n = board[0].length;

        boolean[][] visited = new boolean[m][n];
        int count = 0;

        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                if (board[row][col] == 'x' && !visited[row][col]) {
                    count++;
                    this.dfs(board, row, col, visited);
                }
            }
        }

        return count;
    }

    private void dfs(char[][] board, int i, int j, boolean[][] visited) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] || visited[i][j]) {
            return;
        }

        visited[i][j] = true;

        for (int[] d : directions) {
            int nextRow = i + d[0];
            int nextCol = j + d[1];

            dfs(board, nextRow, nextCol, visited);
        }
    }
}