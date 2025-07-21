Array.prototype.filter = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.filter called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const result = [];
    const array = Object(this); // make sure it's treated as an object
    const len = array.length >>> 0; // convert length to an unsigned 32-bit integer

    for (let i = 0; i < len; i++) {
      if (i in array) { // skip empty slots in sparse arrays
        if (callback.call(thisArg, array[i], i, array)) {
          result.push(array[i]);
        }
      }
    }

    return result;
};

const nums = [1, 2, 3, 4, 5];

const even = nums.filter(function(num) {
  return num % 2 === 0;
});

console.log(even); // [2, 4]
