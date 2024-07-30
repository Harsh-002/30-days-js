// Activity 1: Linked List
// • Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

console.log(node1);
console.log(node2);

// • Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
  constructor() {
    this.head = null;
  }

  // to add a node at the end
  add(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to remove a node from the end
  remove() {
    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      const removedValue = this.head.value;
      this.head = null;
      return removedValue;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      const removedValue = current.next.value;
      current.next = null;
      return removedValue;
    }
  }

  // Method to display all nodes
  displayAll() {
    if (this.head === null) {
      return `List is empty`;
    } else {
      let current = this.head;
      let output = "";
      while (current !== null) {
        output += current.value + "->";
        current = current.next;
      }
      output += "null";
      console.log(output);
    }
  }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.displayAll();

console.log("Removed:" + list.remove());
list.displayAll();
console.log("Removed:" + list.remove());
list.displayAll();
console.log("Removed:" + list.remove());
list.displayAll();
console.log("Removed:" + list.remove());
list.displayAll();

// Activity 2: Stack
// • Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log("The stack is empty.");
    } else {
      console.log(this.items.join(" -> "));
    }
  }

  reverse(string) {
    string.split;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();

console.log("Peek:", stack.peek());

console.log("Pop:", stack.pop());
stack.display();

console.log("Pop:", stack.pop());
stack.display();

console.log("Pop:", stack.pop());
stack.display();

console.log("Pop:", stack.pop());
stack.display();

// • Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(string) {
  const stack = new Stack();

  let reversed = "";

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Reversed String: ${reversedString}`);

// Activity 3: Queue
// • Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    if (this.isEmpty()) {
      console.log(`No items in queue`);
    } else {
      console.log(this.items.join("->"));
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();

console.log(`Front: ${queue.front()}`);
console.log(`Dequeue: ${queue.dequeue()}`);
console.log(`Dequeue: ${queue.dequeue()}`);
console.log(`Dequeue: ${queue.dequeue()}`);
console.log(`Dequeue: ${queue.dequeue()}`);

// • Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function printer() {
  const printerQueue = new Queue();

  printerQueue.enqueue("Printer Job 1");
  printerQueue.enqueue("Printer Job 2");
  printerQueue.enqueue("Printer Job 3");
  printerQueue.display();

  while (!printerQueue.isEmpty()) {
    let currentJob = printerQueue.dequeue();
    console.log(`Processing: ${currentJob}`);
    // Simulate the time taken to print (e.g., 1 second per job)
    // In a real scenario, you might replace this with actual print logic
  }

  printerQueue.display();
}

printer();

// Activity 4: Binary Tree
// • Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
// • Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
// Activity 5: Graph (Optional)
// • Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
// • Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
