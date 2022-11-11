/**
 * problem statement:
 *      given the roots of two binary trees, p and q, write a function to check
 *    if they are the same or not.
 * 
 *      two binary trees are considered the same if they are structurally identical,
 *   and the nodes have the same value.
 * 
 * this algorithm uses a tree data structure.
 * @param {*} p 
 * @param {*} q 
 * @returns 
 */
const isSameTree = (p, q) => {
    if (!p && !q) {
        return true
    }
    if (!p || !q) {
        return false
    }
    if (p.val !== q.val) {
        return false
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// best implementation
const _isSameTree = (p, q) => {
    if (p === null && q === null) {
        return true
    }

    if (p === null || q === null) {
        return false
    }

    if (p.val !== q.val) {
        return false
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}