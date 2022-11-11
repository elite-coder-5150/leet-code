/**
 * problem statement:
 *      given the root of a binary tree, check whether it is a mirror of itself.
 *    (i.e., symmetric around its center).
 * 
 * 
 */

const isSymmetric = (root) => {
    if (!root) {
        return true;
    }
    return isMirror(root.left, root.right);
}

const isMirror = (left, right) => {
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

// best implementation.
// this algorithm using the assertion technique.
const _isSymmetric = (root) => {
    if (root === null) {
        return false
    }

    let leftBranch = root.left
    let rightBranch = root.right

    if (leftBranch === null && rightBranch === null) {
        return true
    }

    if (leftBranch?.right?.val !== rightBranch?.left?.val) {
        return false
    }

    if (leftBranch?.left?.val !== rightBranch?.right?.val) {
        return false
    }

    return checkSymtric(leftBranch.right, rightBranch.left) && checkSymtric(leftBranch.left, rightBranch.right)
}

const checkSymtric = (left, right) => {
    if (left === null && right === null) {
        return true
    }

    if (left?.val !== right?.val) {
        return false
    }

    return checkSymtric(left.right, right.left) && checkSymtric(left.left, right.right)
}