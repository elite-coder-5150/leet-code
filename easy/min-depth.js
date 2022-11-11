const minDepth = (root) => {
    if (!root) return 0;
    if (!root.left) return minDepth(root.right) + 1;
    if (!root.right) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

// best solution
const _minDepth = (root) => {
    if (root === null) {
        return 0;
    }

    const queue = [root]
    let level = 0;

    while (queue.length) {
        const len = queue.length;
        level++;

        for (let i = 0; i < len; i++) {
            const { left, right } = queue.shift();

            if (left === null && right === null) {
                return level;
            }

            left && queue.push(left);
            right && queue.push(right);
        }
    }

    return level;
}