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
const pathSum = (root, sum) => {
    if (!root) return 0;
    return pathSumFrom(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

const pathSumFrom = (root, sum) => {
    if (!root) return 0;
    return (root.val === sum ? 1 : 0) + pathSumFrom(root.left, sum - root.val) + pathSumFrom(root.right, sum - root.val);
}