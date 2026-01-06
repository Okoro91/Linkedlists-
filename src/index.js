import LinkedList from "./linkedList.js";
// import createLinkedList from "./factory.js";

const list = new LinkedList();

// const list = createLinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("chicken");
list.append("rabbit");
list.append("goat");
list.append("lion");

console.log("Initial list:");
console.log(list.toString());

console.log("\nSize of list:", list.size());
console.log("Head value:", list.headValue());
console.log("Tail value:", list.tail());
console.log("Value at index 2:", list.at(2));
console.log("Contains 'cat':", list.contains("cat"));
console.log("Index of 'snake':", list.findIndex("snake"));

list.prepend("rabbit");
console.log("\nAfter prepending 'rabbit':");
console.log(list.toString());

console.log("\nPopped value:", list.pop());
console.log("After pop:");
console.log(list.toString());

console.log("\nTesting insertAt:");
list.insertAt(2, "fish", "lizard");
console.log(list.toString());

console.log("\nTesting removeAt:");
const removed = list.removeAt(3);
console.log("Removed value:", removed);
console.log("After removal:");
console.log(list.toString());

console.log("\nEdge cases:");
console.log("List contains 'elephant':", list.contains("elephant"));
console.log("Index of 'elephant':", list.findIndex("elephant"));
console.log("Value at index 10:", list.at(10));

const emptyList = new LinkedList();
console.log("\nEmpty list tests:");
console.log("Size:", emptyList.size());
console.log("Head:", emptyList.headValue());
console.log("Tail:", emptyList.tail());
console.log("ToString:", `"${emptyList.toString()}"`);
console.log("Pop from empty:", emptyList.pop());
