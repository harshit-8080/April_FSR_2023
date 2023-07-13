class Queue {
  constructor() {
    // Decide My queue Length should not greater than 4.
    this.items = [];
  }

  isFull() {
    if (this.items.length == 10) {
      return true;
    }
    return false;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.items.push(element);
    } else {
      console.log("Your Queue is Full");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Dequeue can't be done as your queue is Empty");
    } else {
      this.items.shift();
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Peek can't be calculated as your queue is Empty");
    } else {
      console.log("Your Peak of Queue --> ", this.items[0]);
    }
  }

  isEmpty() {
    if (this.items.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  printQueue() {
    console.log(this.items);
  }

  clear() {
    this.items = [];
  }

  size() {
    console.log("Queue Size ==> ", this.items.length);
  }
}

let queueObject = new Queue();

queueObject.enqueue(10);
queueObject.enqueue(20);
queueObject.enqueue(30);
queueObject.enqueue(40);

queueObject.printQueue();

queueObject.enqueue(50); // ???
