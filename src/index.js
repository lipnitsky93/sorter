class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = null;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  bubbleSort(arr, comparator) {
    if (comparator) {
      arr.sort(comparator);
    } else {
      var n = arr.length;
      for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-1-i; j++) {
          if (arr[j+1] < arr[j]) {
            var t = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = t;
          }
        }
      }
    }
    return arr;
  }

  sort(indices) {
    indices.sort();
    var sortedArr = [];
    for(var i = 0; i < indices.length; i++) {
      sortedArr.push(this.arr[indices[i]]);
    }
    if (this.comparator && typeof this.comparator === 'function') {
      this.bubbleSort(sortedArr, this.comparator)
    } else {
      this.bubbleSort(sortedArr);
    }
    for(var i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = sortedArr[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;