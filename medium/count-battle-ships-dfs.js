class solution {
    constructor(board) {
        // TODO: find a way to calculate different directions
        // this.directions = new Array([]);
        this.board = new Array([]);
        this.m = board.length;
        this.n = board[0].length;
        this.visited = new Array(this.m[this.n]);
        this.count = 0;
        this.directions = new Array([]);

        this.nextRow = 0;
        this.nextCol = 0;
    }

    
    countBattleshipsDFS(board = new Array([])) {
        for (let row = 0; row < this.m.length; row++) {
            for (let col = 0; col < this.n.length; col++) {
                if (board[row][col] === 'X' && !this.visited[row][col]) {
                    this.count++;
                    this.dfs(board, row, col, this.visited)
                }
            }
        }
    }

    dfs(board = new Array([]), i, j, visited = new Array([])) {
        let directions = new Array([]);
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] || visited[i][j]) {
            return;
        }

        visited[i][j] = true;
        
        for (let d in directions) {
            this.nextRow = i + d[0];
            this.nextCol = j + d[1];

            this.dfs(board, nextRow, nextCol, visited);
        }
    }

    getDirection(ship) {
        if (ship !== null) {
            
        }
    }
}

let solved = new solution()
solved.countBattleshipsDFS([]);