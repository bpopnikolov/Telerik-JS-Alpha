const BinaryTree = require('../Data-Structures/binary-tree');
const Stack = require('../Linear-Data-Structures/stack/stack');

const tree = new BinaryTree(5,
    new BinaryTree(3,
        new BinaryTree(1),
        new BinaryTree(2)),
    new BinaryTree(4,
        null, new BinaryTree(7, new BinaryTree(8))));


const dfs = (root) => {
    if (!root) {
        return;
    }

    // pre-order traversal
    console.log(root.value);
    dfs(root.left);
    // in-order traversal
    dfs(root.right);
    // post-order traversal
};

const dfsStack = (root) => {
    const stack = new Stack();
    stack.push(root);

    while (stack.length > 0) {
        const x = stack.pop();
        console.log(x.value);

        if (x.right) {
            stack.push(x.right);
        }
        if (x.left) {
            stack.push(x.left);
        }
    }
};


dfs(tree);
console.log('------------');
dfsStack(tree);
