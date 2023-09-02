class Node {
  constructor(data) {
    this.left = null;
    this.data = data;
    this.right = null;
  }
}

function insert(root, key) {
  if (root == null) {
    return new Node(key);
  }

  if (key <= root.data) {
    root.left = insert(root.left, key);
  } else if (key > root.data) {
    root.right = insert(root.right, key);
  }

  return root;
}

root = null;

root = insert(root, 10);
root = insert(root, 12);
root = insert(root, 14);
root = insert(root, 16);
root = insert(root, 8);
root = insert(root, 2);
root = insert(root, 4);
root = insert(root, 20);
root = insert(root, 16);
root = insert(root, 20);
root = insert(root, 3);
root = insert(root, 2);
root = insert(root, 12);

function preOrder(root) {
  if (root == null) {
    return;
  }
  console.log(root.data);
  preOrder(root.left); // left subTree
  preOrder(root.right); // right subTree
}
preOrder(root);
