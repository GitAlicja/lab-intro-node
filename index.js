class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {

    if (pos <= this.items.length - 1) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }

  }

  max() {

    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error('EmptySortedList');
    }

  }

  min() {

    if (this.items.length > 0) {
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }

  }

  sum() {

    if (this.items.length === 0) {
      return 0;
    } else {
      let total = 0;
      this.items.forEach(item => {
        total += item;
      });
      return total;

    }
  }

  avg() {

    /*
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let total = 0;
      this.items.forEach(item => {
        total += item;
      });
      return total / this.items.length;

    }
  }
  */

    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length;
    }
  }

}


module.exports = SortedList;
