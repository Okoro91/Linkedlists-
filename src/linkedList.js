class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }

    this._size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this._size++;
  }

  size() {
    return this._size;
  }

  headValue() {
    return this.head ? this.head.value : undefined;
  }

  tail() {
    if (!this.head) return undefined;

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0 || index >= this._size || !this.head) {
      return undefined;
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.nextNode;
      currentIndex++;
    }

    return current.value;
  }

  pop() {
    if (!this.head) return undefined;

    const value = this.head.value;
    this.head = this.head.nextNode;
    this._size--;

    return value;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    if (!this.head) return "";

    let result = "";
    let current = this.head;

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += "null";
    return result;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this._size) {
      throw new RangeError(`Index ${index} is out of bounds.`);
    }

    if (values.length === 0) return;

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
    } else if (index === this._size) {
      for (let value of values) {
        this.append(value);
      }
    } else {
      let current = this.head;
      let currentIndex = 0;

      while (currentIndex < index - 1) {
        current = current.nextNode;
        currentIndex++;
      }

      const afterNode = current.nextNode;

      for (let value of values) {
        const newNode = new Node(value);
        current.nextNode = newNode;
        current = newNode;
        this._size++;
      }

      current.nextNode = afterNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this._size || !this.head) {
      throw new RangeError(`Index ${index} is out of bounds.`);
    }

    if (index === 0) {
      return this.pop();
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      current = current.nextNode;
      currentIndex++;
    }

    const nodeToRemove = current.nextNode;
    const value = nodeToRemove.value;

    current.nextNode = nodeToRemove.nextNode;
    this._size--;

    return value;
  }
}

export default LinkedList;
