class TreeNode {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
        this.next = null
    }
}

const connectLevelOrderSiblings = (root) => {
    const q = [root];

    while (q.length) {
        const levelsize = q.length
        let prevNode = null;

        for (let i = 0; i < levelsize; i++) {
            const currNode = q.shift();

            if (prevNode) {
                prevNode.next = currNode
            }

            prevNode = currNode;

            if (currNode.left) {
                q.push(currNode.left)
            }

            if (currNode.right) {
                q.push(currNode.right)
            }
        }
    }
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new  TreeNode(7);

