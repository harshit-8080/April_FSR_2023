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

function maximumFromTree(root) {
  if (root == null) {
    return 0;
  }

  let leftSubTreeMax = maximumFromTree(root.left);
  let rightSubTreeMax = maximumFromTree(root.right);

  return Math.max(root.data, leftSubTreeMax, rightSubTreeMax);
}

console.log(maximumFromTree(root));

function minimumFromTree(root) {
  if (root == null) {
    return Number.POSITIVE_INFINITY;
  }

  let leftSubTreeMin = minimumFromTree(root.left);
  let rightSubTreeMin = minimumFromTree(root.right);

  return Math.min(root.data, leftSubTreeMin, rightSubTreeMin);
}

console.log(minimumFromTree(root));
