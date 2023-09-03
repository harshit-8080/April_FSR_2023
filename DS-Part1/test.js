class linkedList {
  deleteSumZero() {
    let current = this.head;

    while (current) {
      let sum = 0;
      let tempNode = current;

      while (tempNode) {
        sum = sum + tempNode.data;

        if (sum == 0) {
          // delete nodes from current to temp inclusive()

          this.helpDelete(current, tempNode);
        }

        tempNode = tempNode.next;
      }

      current = current.next;
    }
  }

  helpDelete(start, end) {
    let current = this.head;

    let prev = null;

    // finding the node before start node
    while (current != start) {
      prev = current;
      current = current.next;
    }

    // skip node from start to end...
    while (current != end.next) {
      current = current.next;
    }

    if (prev) {
      prev.next = end.next;
    } else {
      this.head = end.next;
    }
  }
}
