/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 *
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 */
const sortedArrayToBST = (nums) => {
    if (!nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
}

const TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
}

/** best solution */
const _sortedBst = (nums, left = 0, right = nums.length - 1) => {
    if (left > right)
        return null;
    const value = left + (right - left) / 2
    const mid = Math.floor(value), node = new TreeNode();
    node.left = _sortedBst(nums, left, mid - 1);
    node.right = _sortedBst(nums, mid + 1, right);
}