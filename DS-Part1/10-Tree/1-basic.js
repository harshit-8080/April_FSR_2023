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

function inOrder(root) {
  if (root == null) {
    return;
  }

  inOrder(root.left); // left subTree
  console.log(root.data);
  inOrder(root.right); // right subTree
}
inOrder(root);

function preOrder(root) {
  if (root == null) {
    return;
  }
  console.log(root.data);
  preOrder(root.left); // left subTree
  preOrder(root.right); // right subTree
}
preOrder(root);

function postOrder(root) {
  if (root == null) {
    return;
  }

  postOrder(root.left); // left subTree
  postOrder(root.right); // right subTree
  console.log(root.data);
}
postOrder(root);
