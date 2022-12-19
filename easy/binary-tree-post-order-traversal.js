/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 */
function postorderTraversal(root) {
    const result = [];
    postorder(root, result);
    return result;
}

function postorder(root, result) {
    if (!root) return;
    postorder(root.left, result);
    postorder(root.right, result);
    result.push(root.val);
}