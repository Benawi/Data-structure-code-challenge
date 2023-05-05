// Start with your code from last challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(number) {
    // your code here
    const node = new Node(number);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next_node = node;
      this.tail = node;
    }
    this.length++;   
    }

 
  get(index) {
    // your code here
    let counter = 0;
    let currentNode  = this.head;
    while (currentNode ) {
     if (counter === index) {
      return currentNode.value;
     }
     counter++;
     currentNode  = currentNode.next_node;
    }
   return currentNode;
    }
  }

const list = new LinkedList()

list.add(3)
list.add(5)


console.log(list.get(1))
// => 5

module.exports = LinkedList