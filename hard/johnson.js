/**
 * Implementation of Johnson's algorithm in Python3
 */
  
// Import function to initialize the dictionary
const { default: defaultdict } = require('collections/defaultdict');
const MAX_INT = Number.MAX_SAFE_INTEGER;
  
// Returns the vertex with minimum 
// distance from the source
function minDistance(dist, visited) {
  
    let minimum = MAX_INT;
    let minVertex = 0;
    for (let vertex = 0; vertex < dist.length; vertex++) {
        if (minimum > dist[vertex] && visited[vertex] === false) {
            minimum = dist[vertex];
            minVertex = vertex;
        }
    }
  
    return minVertex;
}
  
  
// Dijkstra Algorithm for Modified 
// Graph (removing negative weights)
function Dijkstra(graph, modifiedGraph, src) {
  
    // Number of vertices in the graph
    const num_vertices = graph.length;
  
    // Dictionary to check if given vertex is 
    // already included in the shortest path tree
    const sptSet = defaultdict(false);
  
    // Shortest distance of all vertices from the source
    const dist = new Array(num_vertices).fill(MAX_INT);
  
    dist[src] = 0;
  
    for (let count = 0; count < num_vertices; count++) {
  
        // The current vertex which is at min Distance 
        // from the source and not yet included in the 
        // shortest path tree
        const curVertex = minDistance(dist, sptSet);
        sptSet[curVertex] = true;
  
        for (let vertex = 0; vertex < num_vertices; vertex++) {
            if (sptSet[vertex] === false && dist[vertex] > dist[curVertex] + modifiedGraph[curVertex][vertex] && graph[curVertex][vertex] !== 0) {
                dist[vertex] = dist[curVertex] + modifiedGraph[curVertex][vertex];
            }
        }
    }
  
    // Print the Shortest distance from the source
    for (let vertex = 0; vertex < num_vertices; vertex++) {
        console.log('Vertex' + vertex + ':' + dist[vertex]);
    }
}
  
// Function to calculate shortest distances from source
// to all other vertices using Bellman-Ford algorithm
function BellmanFord(edges, graph, num_vertices) {
  
    // Add a source s and calculate its min
    // distance from every other node
    const dist = new Array(num_vertices + 1).fill(MAX_INT);
    dist[num_vertices] = 0;
  
    for (let i = 0; i < num_vertices; i++) {
        edges.push([num_vertices, i, 0]);
    }
  
    for (let i = 0; i < num_vertices; i++) {
        for (let [src, des, weight] of edges) {
            if (dist[src] !== MAX_INT && dist[src] + weight < dist[des]) {
                dist[des] = dist[src] + weight;
            }
        }
    }
  
    // Don't send the value for the source added
    return dist.slice(0, num_vertices);
}
  
// Function to implement Johnson Algorithm
function JohnsonAlgorithm(graph) {
      
     // Number of vertices in the graph
     const num_vertices = graph.length;
      
     // List to store the edges
     const edges = [];
      
     // Add all the edges in the graph
     for (let i = 0; i < num_vertices; i++) {
          for (let j = 0; j < num_vertices; j++) {
                if (graph[i][j] !== 0) {
                 edges.push([i, j, graph[i][j]]);
                }
          }
     }
      
     // Calculate the shortest distance from source
     // to all other vertices using Bellman-Ford algorithm
     const h = BellmanFord(edges, graph, num_vertices);
      
     // Modified graph
     const modifiedGraph = new Array(num_vertices).fill(0).map(() => new Array(num_vertices).fill(0));
      
     // Modify the weight of each edge
     for (let i = 0; i < num_vertices; i++) {
          for (let j = 0; j < num_vertices; j++) {
                if (graph[i][j] !== 0) {
                 modifiedGraph[i][j] = graph[i][j] + h[i] - h[j];
                }
          }
     }
      
     // Run Dijkstra's algorithm for each vertex
     for (let i = 0; i < num_vertices; i++) {
          Dijkstra(graph, modifiedGraph, i);
     }ß
}