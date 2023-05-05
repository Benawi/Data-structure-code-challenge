// Start with your code from LinkedList challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }

}
class Queue {
  constructor(){
    this.head=null;
    this.tail=null;
    this.length = 0;
  }
  add(number) {
    const node = new Node(number);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next_node = node;
      this.tail = node;
    }
    this.length++;   
    // your code here
  }
  
  remove() {
    let newnode;
    if(this.head!==null){
      newnode=this.head.value;
      this.head=this.head.next_node;
        return newnode;
    }else
    return -1;
    // your code here
  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue
