

/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


 */
class Node {
    constructor(item) {
        this.data = item
        this.left = null
        this.right = null
    }
}

let root

const maxDepth = (root) => {
    if (node == null) {
        return 0
    } else {
        let leftDepth = maxDepth(node.left)
        let rightDepth = maxDepth(node.right)

        if (leftDepth > rightDepth) {
            return leftDepth + 1
        } else {
            return rightDepth + 1
        }
    }
}

// best implementation
const _maxDepth = (root) => {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    return 1 + Math.max(_maxDepth(root.left), _maxDepth(root.right)) + 1
}