/* Here is the explanation for the code above:
1. First, we create a new Map instance named distances to store the distances of the vertices from the source.
2. Then, we create a new Map instance named previous to store the previous vertices of the vertices.
3. Next, we create a new PriorityQueue instance named queue.
4. We set the distance of the source to 0.
5. We enqueue the source and its distance (0) into the queue.
6. We iterate through the queue until it is empty.
7. We dequeue the first element from the queue.
8. If the current vertex is the target vertex, we break the loop.
9. If the current vertex has successors, we iterate through them.
10. We calculate the new distance of the current vertex and its successor.
11. If the successor is not in the distances Map or the new distance is less than the distance of the successor, we update the distances Map and the previous Map.
12. We enqueue the successor and its new distance into the queue.
13. We create a new array named path to store the path from the source to the target.
14. We create a variable named node and set it to the target.
15. We iterate through the previous Map until we reach the source.
16. We push the current node to the path array.
17. We set the current node to the previous vertex of the current node.
18. We reverse the path array and return it. */

const dijkstra = (graph, source, target) => {
    const distances = new Map();
    const previous = new Map();
    const queue = new PriorityQueue();
    distances.set(source, 0);
    queue.enqueue([source, 0]);
    while (queue.size > 0) {
        const [current, distance] = queue.dequeue();
        if (current === target) {
            break;
        }
        const successors = graph.get(current);
        if (successors) {
            successors.forEach(([successor, weight]) => {
                const newDistance = distance + weight;
                if (!distances.has(successor) || newDistance < distances.get(successor)) {
                    distances.set(successor, newDistance);
                    previous.set(successor, current);
                    queue.enqueue([successor, newDistance]);
                }
            });
        }
    }
    const path = [];
    let node = target;
    while (node) {
        path.push(node);
        node = previous.get(node);
    }
    return path.reverse();
}