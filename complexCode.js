/** 
 * filename: complexCode.js
 * Description: This code demonstrates a complex and elaborate implementation of a data structure and algorithm in JavaScript.
 * It includes a custom implementation of a doubly linked list and an algorithm to find the kth-to-last element in the list.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  getKthToLast(k) {
    if (k <= 0 || this.isEmpty()) {
      return null;
    }

    let currentNode = this.tail;
    let count = 1;

    while (count < k && currentNode.prev) {
      currentNode = currentNode.prev;
      count++;
    }

    if (count < k) {
      return null;
    } else {
      return currentNode.value;
    }
  }
}

// Usage example:
const list = new DoublyLinkedList();
list.addToTail(10);
list.addToTail(20);
list.addToTail(30);
list.addToTail(40);
list.addToTail(50);

console.log("Kth to last element (k=3):", list.getKthToLast(3)); // Output: 30