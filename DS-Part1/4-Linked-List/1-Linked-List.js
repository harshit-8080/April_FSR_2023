class Node {
  constructor(value) {
    this.value = value; // data
    this.next = null; // address
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    // Creating New Node..
    const newNode = new Node(value);

    // Here we will do the linking code
    if (this.head == null && this.tail == null) {
      // condition --> Empty LinkedList ( NO NODE as of Now)
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    // Creating New Node..
    const newNode = new Node(value);

    if (this.head == null && this.tail == null) {
      // condition --> Empty LinkedList ( NO NODE as of Now)
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  print() {
    let current = this.head;

    const values = [];

    while (current != null) {
      values.push(current.value);
      current = current.next; // same like a increment in loop
    }

    console.log(values.join(" -> "));
  }

  isEmpty() {
    if (this.head == null && this.tail == null) {
      console.log("You have Empty Linked List");
    } else {
      console.log("Your Linked List is Not Empty");
    }
  }

  length() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      count++;
      current = current.next;
    }
    console.log(`Your Linked List Having ${count} Nodes`);

    return count;
  }

  clear() {
    this.head = null;
    this.tail = null;

    console.log("Your Linked List Is Now Empty");
  }

  delete(index) {
    if (index >= 0 && index < this.length()) {
      if (this.head == null && this.tail == null) {
        console.log("Your LL is Empty, Can't Delete Anything");
      } else {
        if (index == 0) {
          this.head = this.head.next;
        } else {
          let current = this.head;
          let previous = null;

          let currentIndex = 0;

          while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
          }

          previous.next = current.next;

          //previous.next == null
          if (!previous.next) {
            this.tail = previous;
          }
        }
      }
    } else {
      console.log("Index is Invalid...");
    }
  }
}

const llObject = new LinkedList();

llObject.append(10);
llObject.append(20);

// llObject.append(20);
// llObject.append(30);
// llObject.prepend(100);
// llObject.prepend(200);

llObject.isEmpty();
llObject.length();

llObject.print(); // 200 -> 100 -> 10 -> 20 -> 30

llObject.delete(1);

llObject.print();
