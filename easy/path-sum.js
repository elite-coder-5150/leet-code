/**
 *  1. path sum from node means that the number of paths that sum to a given value starting
 *     from that node.
 *  
 *  2. Path sum from node = number of paths that sum to a given value starting from node's 
 *     left child.
 * 
 *  3. path sum = sub from root + path sub from roots left child + path sum from the root's 
 *     right child.
 * 
 * @param {*} root 
 * @param {*} sum 
 * @returns 
 */
function pathSum(root, sum) {
    if (!root) return 0;
    return pathSumFrom(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

function pathSumFrom(root, sum) {
    if (!root) return 0;
    return (root.val === sum ? 1 : 0) + pathSumFrom(root.left, sum - root.val) + pathSumFrom(root.right, sum - root.val);
}

// Path: medium/path-sum-ii.js
/**
 * 1. path sum from node means that the number of paths that sum to a given value starting
 *   from that node.
 * 
 * 2. Path sum from node = number of paths that sum to a given value starting from node's
 *  left child.
 * 
 * 3. path sum = sub from root + path sub from roots left child + path sum from the root's
 * right child.
 * 
 * @param {*} root
 * @param {*} sum
 * @returns
 * 
 * Time: O(n^2)
 * Space: O(n)
 *  
 * 
 */
function pathSum(root, sum) {
    if (!root) return [];
    const result = [];
    pathSumFrom(root, sum, [], result);
    return result;
}

function pathSumFrom(root, sum, path, result) {
    if (!root) return;
    path.push(root.val);
    if (root.val === sum && !root.left && !root.right) {
        result.push(path.slice());
    }
    pathSumFrom(root.left, sum - root.val, path, result);
    pathSumFrom(root.right, sum - root.val, path, result);
    path.pop();
}

