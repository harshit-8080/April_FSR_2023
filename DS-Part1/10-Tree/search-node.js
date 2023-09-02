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

function searchNodeFromTree(root, key) {
  if (root == null) {
    return false;
  }
  if (root.data == key) {
    return true;
  }

  let leftCheck = searchNodeFromTree(root.left, key);
  let rightCheck = searchNodeFromTree(root.right, key);

  if (leftCheck == true || rightCheck == true) {
    return true;
  } else {
    return false;
  }
}

let result = searchNodeFromTree(root, 501);
console.log(result);
