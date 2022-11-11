/* Here is the explanation for the code above:
1. We use a Set to keep track of the visited nodes. This way, we can avoid visiting the same node twice.
2. We use an Array to keep track of the order in which nodes finish. We need this Array to be able to
   iterate over the nodes in the reverse topological order.
3. We use a Set to keep track of the nodes that have been visited in the second DFS pass.
4. We use an Array to keep track of the strongly connected components. Each element of the Array
   represents a strongly connected component, and it is an Array containing the nodes of that component.
5. We define a recursive function dfs1 that performs a DFS starting from a given node. The first DFS
   pass is used to find the order in which nodes finish.
6. We define a recursive function dfs2 that performs a DFS starting from a given node. The second DFS
   pass is used to find the strongly connected components.
7. We iterate over the nodes of the graph and perform a DFS from each node. This way, we make sure that
   we visit every node.
8. We create a new Map that will be used to store the transpose of the graph. We use a Map instead of an
   Object because we want to preserve the insertion order of the nodes.
9. We iterate over the nodes of the graph and add each node to the transpose of the graph. We also add
   the nodes that are predecessors of the current node.
10. We iterate over the order Array and perform a DFS from each node. This way, we make sure that we
    visit every node.
11. We return the result Array. */
T

const kosaraju = (graph) => {
    const visited = new Set();
    const order = [];
    const stronglyConnected = new Set();
    const result = [];
    const dfs1 = (node) => {
        if (!visited.has(node)) {
            visited.add(node);
            const successors = graph.get(node);
            if (successors) {
                successors.forEach(dfs1);
            }
            order.push(node);
        }
    };
    const dfs2 = (node) => {
        if (!stronglyConnected.has(node)) {
            stronglyConnected.add(node);
            const successors = transpose.get(node);
            if (successors) {
                successors.forEach(dfs2);
            }
            result[result.length - 1].push(node);
        }
    };
    graph.forEach((_, node) => dfs1(node));
    const transpose = new Map();
    graph.forEach((successors, node) => {
        successors.forEach((successor) => {
            const predecessors = transpose.get(successor);
            if (predecessors) {
                predecessors.push(node);
            } else {
                transpose.set(successor, [node]);
            }
        });
    });
    while (order.length) {
        const node = order.pop();
        if (!stronglyConnected.has(node)) {
            result.push([]);
            dfs2(node);
        }
    }
    return result;
}