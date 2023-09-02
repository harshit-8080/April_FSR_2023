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
root.right.right.left = new Node(1);
root.right.right.left.left = new Node(2);
root.right.right.left.right = new Node(3);

function countAllLeafNodes(root) {
  if (root == null) {
    return 0;
  }

  if (root.left == null && root.right == null) {
    return 1;
  }

  let leftSubTreeLeafNodes = countAllLeafNodes(root.left);
  let rightSubTreeLeafNodes = countAllLeafNodes(root.right);

  return leftSubTreeLeafNodes + rightSubTreeLeafNodes;
}

console.log(countAllLeafNodes(root));
