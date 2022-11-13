// Given the root of a binary tree, invert the tree, and return its root.

const invertTree = (root) => {
    if (!root) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};
/**
 * the above function does the following
 *      1. it check to see if root has no value, if so simple return null.
 *      2. it inverts the tree by calling itself by switching the right for the leff.
 *      3. simply return the root
 *  
 * @param {*} root 
 * @returns 
 */
/**
 * this function does the following:
 *      1. it checks the value of root, if root has no value then return null
 *      2. else it
 *          1. temp is set to root.left
 *          2. root.left = invertTree(root.right);
 *          3. root.right = invertTree(temp);
 *          4. call invertTree on root.right);
 *          5. then call InvertTree on root.left
 *          6. simple return the root.
 * 
 *      3. I can write the same algorithm in a variety of languages and frameworks not just angular.
 *      
 * 
 * function methodology:
 *      recursion 
 */
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
}