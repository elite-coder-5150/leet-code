/**
 * Given a binary tree, determine if it is 
height-balanced
.
 * @param {*} root 
 * @returns 
 */
const isBalanced = (root) => {
    if (!root) return true;
    const left = height(root.left);
    const right = height(root.right);
    if (Math.abs(left - right) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
}

const height = (root) => {
    if (!root) return 0;
    return Math.max(height(root.left), height(root.right)) + 1;
}