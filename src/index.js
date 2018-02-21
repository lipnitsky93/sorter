class Sorter {
  constructor() {
    this.arr = [];
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

  sort(indices) {
    indices.sort();
    var sortarr = [];
    for(var i = 0; i < indices.length; i++) {
        sortarr.push(this.arr[indices[i]]);
    }
    function BubbleSort(arr) {                             
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
      return arr;    
  }
  BubbleSort(sortarr);
    for(var i = 0; i < indices.length; i++) {
        this.arr[indices[i]] = sortarr[i];
    }
  }

  setComparator(compareFunction) {
    this.arr.sort(compareFunction);
  }
}

module.exports = Sorter;