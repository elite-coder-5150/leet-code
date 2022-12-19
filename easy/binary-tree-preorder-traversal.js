/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 */
function preorderTraversal(root) {
    const result = [];
    preorder(root, result);
    return result;
}

function preorder(root, result) {
    if (!root) return;
    result.push(root.val);
    preorder(root.left, result);
    preorder(root.right, result);
}