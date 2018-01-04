const BinaryTree = require('../Data-Structures/binary-tree');
const Queue = require('../Linear-Data-Structures/queue/queue');


const tree = new BinaryTree(5,
    new BinaryTree(3,
        new BinaryTree(1),
        new BinaryTree(2)),
    new BinaryTree(4,
        null, new BinaryTree(7, new BinaryTree(8))));

console.log(tree);

const bfs = (root) => {
    const queue = new Queue();
    queue.enqueue(root);

    while (!queue.isEmpty()) {
        const x = queue.dequeue();
        console.log(x.value);

        if (x.left) {
            queue.enqueue(x.left);
        }
        if (x.right) {
            queue.enqueue(x.right);
        }
    }
};

bfs(tree);
