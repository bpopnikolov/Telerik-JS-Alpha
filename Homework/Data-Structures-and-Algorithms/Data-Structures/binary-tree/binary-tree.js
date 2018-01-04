class BinaryTree {
    constructor(value, left, right) {
        this.value = value;
        this._left = left;
        this._right = right;
    }

    isLeaf() {
        return this._left && this._right;
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }

}

module.exports = BinaryTree;
  