function deepEqual(a, b, visited = new Map()) {
  
  if(Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  if(a == b) {
    return true;
  }

  if(typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  if(visited.has(a) && visited.get(a) === b ) {
    return true;
  }

  visited.set(a, b);

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if(keysA.length !== keysB.length) {
    return false;
  }

  for(let i = 0; i < keysA.length; i++) {
    //we recursively call the same logic
    const keyA = keysA[i], keyB = keysB[i];
    if(!deepEqual(a[keyA], b[keyB], visited)) {
      return false;
    }
  }

  return true;  
}


let obj1, obj2;
console.log(deepEqual(1, 'hello'));

console.log(deepEqual(1, '1'));

console.log(deepEqual(1, 1));

console.log(deepEqual(NaN, NaN));

console.log(deepEqual([], [])); // true

obj1 = {a: 1, b: 2, c: 3};
obj2 = {a: 1, b: 2, c: 3};

console.log(deepEqual(obj1, obj2));

obj1 = {a : 1, b: [1, [2, [3, {c : 4}]]], c: 4};
obj2 = {a : 1, b: [1, [2, [3, {c:  4}]]], c: 4};

console.log(deepEqual(obj1, obj2)); // true;

const arr1 = [1, '4'];
arr1.push(arr1);

const arr2 = [1, '4'];
arr2.push(arr2);

console.log(deepEqual(arr1, arr2)); 