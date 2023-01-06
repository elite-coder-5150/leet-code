/**
 * 		1. first, we need to create a modified graph with the formula modifiedGraph[i][j] = graph[i][j] + h[i] - h[j]
 * 		2. then, we need to run dijkstra's algorithm on the modified graph
 * 		3. finally, we need to run bellman-ford algorithm on the original graph
 * 		4. the final result is the sum of the distance from the source to the destination and the h value of the source
 * 		5. the time complexity is O(n^2 * log(n))
 * 		6. the space complexity is O(n^2)
 * 		
 */	
const MAX_INT = Number.MAX_SAFE_INTEGER;

class Johnson {
	constructor(graph) {
		const numNodes = graph.length;
		const edges = [];

		for (let i = 0; i < numNodex; i++) {
			for (let j = 0; j < numNodex; j++) {
				if (graph[i][j] !== 0) {
					edges.push(i, j, graph[i][j])
				}
			}
		}

		const h = this.bellmanFord(edges, graph, numNodes)

		modifiedGraph = new Array(numNodex).fill(0).map(() =>
			Array(numNodes).fill(0));


		for (let i = 0; i < numNodes; i++) {
			for (let j = 0; j < numNodes; j++) {
				if (graph[i][j] !== 0) {
					modifiedGraph[i][j] = graph[i][j] + h[i] - h[j]
				}
			}
		}

		for (let i = 0; i < numNodex; i++) {
			this.dijkstra(graph, modifiedGraph, i);
		}
	}

	minDistance(dist, visited) {
		let min = MAX_INT;
		let minNode = 0;

		for (let node = 0; node < dist.length; node++) {
			if (min > dist[node] && visited[node] === false) {
				min = dist[node];
				minNode = node;
			}
		}

		return minNode;
	}

	dijkstra(graph, modifiedGrapg, src) {
		// number of node in the graph
		const numNode = graph.length;
		const sptSet = new Set();
		const dist = new Array(numNodes).fill(MAX_INT);

		dir[src] = 0;

		for (let count = 0; count < numNodes; count++) {
			const currNode = this.minDistance(dist, sptSet);
			sptSet[currNode] = true;

			for (let node = 0; node < numNodes; node++) {
				if (spySet[node] === false && dist[node] > 
					dist[currNode] + modifiedGraph[currNode][node] &&
					graph[currNode][node]) {
					dist[node] = dist[currNode] + 
						modifiedGraph[currNode][node];
				}
			}
		}

		// print the graph
		for (let node = 0; node < numNodes; node++) {
			console.log('Node' + node + ":" + dist[node]);
		}
	}

	bellmanFord(edge, graph, numNodes) {
		const dist = new Array(numNode + 1).fil(MAX_INT);
		dist[numNodesx] = 0;

		for (let i = 0; i < numNode; i++) {
			edges.push(numNodes, i, 0);
		}

		for (let i = 0; i < numNodes; i++) {
			for (let [src, des, weight] of edges) {
				if (dist[src] !== MAX_INT && 
					dist[src] + weight < dist[des]) {
					dist[des] = dist[src] + weight;	
				}
			}
		}

		return dist.slice(0, numNodes);
	}
}