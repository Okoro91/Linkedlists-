const createNode = (value = null) => {
  return {
    value,
    nextNode: null,
  };
};

const createLinkedList = () => {
  let head = null;
  let size = 0;

  return {
    append(value) {
      const newNode = createNode(value);

      if (!head) {
        head = newNode;
      } else {
        let current = head;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = newNode;
      }

      size++;
    },

    prepend(value) {
      const newNode = createNode(value);
      newNode.nextNode = head;
      head = newNode;
      size++;
    },

    size() {
      return size;
    },

    head() {
      return head ? head.value : undefined;
    },

    tail() {
      if (!head) return undefined;

      let current = head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current.value;
    },

    at(index) {
      if (index < 0 || index >= size || !head) {
        return undefined;
      }

      let current = head;
      let currentIndex = 0;

      while (currentIndex < index) {
        current = current.nextNode;
        currentIndex++;
      }

      return current.value;
    },

    pop() {
      if (!head) return undefined;

      const value = head.value;
      head = head.nextNode;
      size--;

      return value;
    },

    contains(value) {
      let current = head;

      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }

      return false;
    },

    findIndex(value) {
      let current = head;
      let index = 0;

      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.nextNode;
        index++;
      }

      return -1;
    },

    toString() {
      if (!head) return "";

      let result = "";
      let current = head;

      while (current) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
      }

      result += "null";
      return result;
    },

    insertAt(index, ...values) {
      if (index < 0 || index > size) {
        throw new RangeError(`Index ${index} is out of bounds.`);
      }

      if (values.length === 0) return;

      if (index === 0) {
        for (let i = values.length - 1; i >= 0; i--) {
          const newNode = createNode(values[i]);
          newNode.nextNode = head;
          head = newNode;
          size++;
        }
      } else if (index === size) {
        for (let value of values) {
          this.append(value);
        }
      } else {
        let current = head;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
          current = current.nextNode;
          currentIndex++;
        }

        const afterNode = current.nextNode;

        for (let value of values) {
          const newNode = createNode(value);
          current.nextNode = newNode;
          current = newNode;
          size++;
        }

        current.nextNode = afterNode;
      }
    },

    removeAt(index) {
      if (index < 0 || index >= size || !head) {
        throw new RangeError(`Index ${index} is out of bounds.`);
      }

      if (index === 0) {
        return this.pop();
      }

      let current = head;
      let currentIndex = 0;

      while (currentIndex < index - 1) {
        current = current.nextNode;
        currentIndex++;
      }

      const nodeToRemove = current.nextNode;
      const value = nodeToRemove.value;

      current.nextNode = nodeToRemove.nextNode;
      size--;

      return value;
    },
  };
};

export default createLinkedList;
