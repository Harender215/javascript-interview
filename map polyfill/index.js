if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.map called on null or undefined');
    }

    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    const O = Object(this);
    const len = O.length >>> 0; // Convert length to a non-negative integer
    const result = new Array(len);

    for (let i = 0; i < len; i++) {
      if (i in O) {
        result[i] = callback.call(thisArg, O[i], i, O);
      }
    }

    return result;
  };
}


const numbers = [1, 2, 3];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6]


const obj = {
  factor: 2
};

const nums = [1, 2, 3];

const result = nums.map(function(n) {
  return n * this.factor;
}, obj); // <== `thisArg` passed here

console.log(result); // [2, 4, 6]