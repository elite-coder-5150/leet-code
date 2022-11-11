/**
 * given the root of a binary tree, return inorder traversal of the nodes' value.
 */
const inorderTraversal = (root) => {
    const result = [];
    const stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
}

// best implementation
const _inorderTraversal = (root) => {
    const res = []

    const traveerse = (node) => {
        if (!node) {
            return
        }

        traveerse(node.left)
        res.push(node.val)
        traveerse(node.right)
    }

    traveerse(root);
    return res
}