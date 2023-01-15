const belmonFord = (graph, source) => {
    const dist = new Array(graph.length).fill(Infinity);
    dist[source] = 0;
    for (let i = 0; i < graph.length - 1; i++) {
        for (let j = 0; j < graph.length; j++) {
            for (let k = 0; k < graph.length; k++) {
                if (graph[j][k] !== 0) {
                    if (dist[k] > dist[j] + graph[j][k]) {
                        dist[k] = dist[j] + graph[j][k];
                    }
                }
            }
        }
    }
    return dist;
}   

const dijkstra = (graph, source) => {
    const dist = new Array(graph.length).fill(Infinity);
    const visited = new Array(graph.length).fill(false);
    dist[source] = 0;
    for (let i = 0; i < graph.length - 1; i++) {
        const min = Math.min(...dist.filter((d, i) => !visited[i]));
        const minIndex = dist.indexOf(min);
        visited[minIndex] = true;
        for (let j = 0; j < graph.length; j++) {
            if (!visited[j] && graph[minIndex][j] !== 0 && dist[j] > dist[minIndex] + graph[minIndex][j]) {
                dist[j] = dist[minIndex] + graph[minIndex][j];
            }
        }
    }
    return dist;
}