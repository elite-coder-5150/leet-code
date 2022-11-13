class Graph {
	/** construct the grpah object **/
	constructor(v) {
		this.V = v
		this.adj = new Array(v)
		this.in  = new Array(v)

		for (let i = 0; i < v; ++i) {
			this.adj[i] = []
			this.in[i] = 0
		}
	}

	/** add an edge to two nodes within the graph **/
	addEdge(u, v) {
		this.adj[u].push(v)
		this.in[v]++
	}

	/**
	 * traverse the graph recursively
	 */
	dfs_util(v, visited) {
		visited[v] = true
		let n

		for (let i of this.adj[v]) {
			n = i

			if (!visited[n])
				this.dfs_util(n, visited)
		}
	}

	/** reverse the graph **/
	getTranpose() {
		let g = new Graph(this.v)

		for (let v = 0; v < this.V; v++) {
			for (let i of this.adj[v]) {
				g.adj[i].push(v)
				(g.in[v])++
			}
		}

		return g
	}

	/** check to see if a component is strongly connected **/
	isStronglyConnected() {
		let visited = new Array(this,V)

		for (let i = 0; i < this.V; i++)
			visited[i] = false

		this.dfs_util(0, visited)

		for (let i = 0; i < this.V; i++)
			if (visited[i] == false)
				return false

		let transposed = this.getTranspose();

		for (let i = 0; i < this.V; i++)
			visited[i] = false

		transposed.dfs_util(0, visited)

		for (let i = 0; i < this.V; i++)
			if (visited[i] == false)
				return false

		return true
	}

	/** 
	  * check to see if there is a EulerineCycle by checking the
	  * value of
	  */
	isEulerianCycle() {
		if (this.isStronglyConnected() == false)
			return false

		for (let i = 0; i < this.V; i++)
			if (this.adj[i].length != this.in[i])
				return false

		return true
	}

    //! the last tow functions are my favorite part of the entire algorithm.
}
