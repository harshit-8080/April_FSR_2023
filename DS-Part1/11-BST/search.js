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

function searchNode(root, target) {
  if (root == null) {
    return false;
  }

  if (root.data == target) {
    return true;
  }

  if (target < root.data) {
    let leftResult = searchNode(root.left, target);
    return leftResult;
  } else {
    let rightResult = searchNode(root.right, target);
    return rightResult;
  }
}

let x = searchNode(root, 80);
console.log(x);
