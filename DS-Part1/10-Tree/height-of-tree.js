class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

root = new Node(10);

root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(5);
root.left.right = new Node(50);
root.right.left = new Node(100);
root.right.right = new Node(200);
root.right.left.left = new Node(500);
root.right.left.left.right = new Node(80);

function calculateHeight(root) {
  if (root == null) {
    // return -1;  // EDGES
    return 0; // NODES
  }

  let leftSubTreeHeight = calculateHeight(root.left);
  let rightSubTreeHeight = calculateHeight(root.right);

  let higher = Math.max(leftSubTreeHeight, rightSubTreeHeight);

  return 1 + higher;
}

console.log(calculateHeight(root));
