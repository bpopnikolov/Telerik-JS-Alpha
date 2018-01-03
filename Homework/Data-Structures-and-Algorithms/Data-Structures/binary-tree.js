class BinaryTree {
    constructor(value, left, right) {
        this.value = value;
        this._left = left;
        this._right = right;
    }

    get isLeaf() {
        return this.left === null && this.right === null;
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }
}

const tree = new BinaryTree(3, new BinaryTree(5), new BinaryTree(4));

console.log(tree);
console.log(tree.isLeaf);
console.log(tree.left);
console.log(tree.right);





