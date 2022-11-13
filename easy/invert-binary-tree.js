// Given the root of a binary tree, invert the tree, and return its root.
const invertTree = (root) => {
    if (!root) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};

// best solution
const invert_tree = (root) => {
    if (!root) {
        return null;
    } else {
        let temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);

        invert_tree(root.right);
        invert_tree(root.left);

        return root;
    }