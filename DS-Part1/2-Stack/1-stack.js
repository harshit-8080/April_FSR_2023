class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove the top element from the Stack
  pop() {
    if (this.isEmpty()) {
      console.log("Pop can't be done because your stack is empty");
    } else {
      this.items.pop();
    }
  }

  top() {
    if (this.isEmpty()) {
      console.log(
        "Top element can't be calculated because Your Stack is Empty"
      );
    } else {
      let lastIndex = this.items.length - 1;
      let top = this.items[lastIndex];
      console.log("Top Element on the Stack is ==> ", top);
    }
  }

  isEmpty() {
    let length = this.items.length;
    if (length == 0) {
      return true;
    } else {
      return false;
    }
  }

  sizeOfStack() {
    let length = this.items.length;

    console.log("Your Stack Size ==> ", length);
  }

  clearStack() {
    this.items = [];
  }

  printStack() {
    console.log(this.items);
  }
}

const stackObject = new Stack();

// 0

stackObject.push("A");
stackObject.push("B");

stackObject.top(); // TOP --> B

stackObject.printStack();

// stackObject.clearStack();

stackObject.push("C");

stackObject.printStack();

stackObject.top(); // TOP --> C
