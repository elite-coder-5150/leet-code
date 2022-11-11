/* Here is the explanation for the code above:
1. We create two maps, index and lowlink. 
2. We create a stack to keep track of the nodes that we have already visited. 
3. We create an array to store the strongly connected components. 
4. We create a counter to keep track of the index of the nodes. 
5. We create a function to find the strongly connected components using the Tarjan algorithm. 
6. We iterate over the graph and add the nodes that are not in the index map to the strongConnect function.
7. We iterate over the successors of the node and check if the successor is not in the index map. 
8. If it is not in the index map, we add it to the stack and increase the counter. 
9. We check if the successor is in the stack. 
10. If it is in the stack, we decrease the counter. 
11. If the lowlink of the node is equal to the index of the node, then we create a new array to store the strongly connected components. 
12. We add the nodes to the strongly connected components array. 
13. We return the strongly connected components array. */

const tarjan = (graph) => {
    const index = new Map();
    const lowlink = new Map();
    const stack = [];
    const result = [];
    let i = 0;
    const strongConnect = (node) => {
        index.set(node, i);
        lowlink.set(node, i);
        i += 1;
        stack.push(node);
        const successors = graph.get(node);
        if (successors) {
        successors.forEach((successor) => {
            if (!index.has(successor)) {
            strongConnect(successor);
            lowlink.set(node, Math.min(lowlink.get(node), lowlink.get(successor)));
            } else if (stack.includes(successor)) {
            lowlink.set(node, Math.min(lowlink.get(node), index.get(successor)));
            }
        });
        }
        if (lowlink.get(node) === index.get(node)) {
        const scc = [];
        let successor;
        do {
            successor = stack.pop();
            scc.push(successor);
        } while (successor !== node);
        result.push(scc);
        }
    };
    graph.forEach((_, node) => {
        if (!index.has(node)) {
        strongConnect(node);
        }
    });
    return result;
    };