class Node {
    constructor(data) {
        this.keftChild = null;
        this.rightChild = null;
        this.data = data;
    }
}

let rootNode

const printZigZagTraversal = () => {
    if (rootNode === null) {
        return;
    }

    let currentLevel = [];
    let nextLevel = [];

    currentLevel.push(rootNode);
    let leftToRight = true;

    while (currentLevel.length > 0) {
        let node = currentLevel.pop()
        document.write(node.data + " ")

        if (leftToRight) {
            if (node.leftChild !== null) {
                nextLevel.push(node.leftChild)
            }

            if (node.rightChild !== null) {
                nextLevel.push(node.rightChild)
            }
        } else {
            if (node.rightChild !== null) {
                nextLevel.push(node.rightChild)
            }

            if (node.leftChild !== null) {
                nextLevel.push(node.leftChild)
            }
        }

        if (currentLevel.length === 0) {
            leftToRight = !leftToRight
            let temp = currentLevel
            currentLevel = nextLevel
            nextLevel = temp
        }
    }
}

const convert = (s, numRows) => {
    if (numRows === 1) {
        return s;
    }

    const rows = [];
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows.push("");
    }

    let curRow = 0;
    let goingDown = false;

    for (const c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }
        curRow += goingDown ? 1 : -1;
    }

    let ret = "";
    for (const row of rows) {
        ret += row;
    }
    return ret;
}