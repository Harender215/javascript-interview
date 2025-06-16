//Implement Promise.race
Promise.race = function(input) {
  return new Promise((resolve, reject) => {
    input.forEach(elem => {
      Promise.resolve(elem)
      .then((value) => resolve(value))
      .catch((reason) => reject(reason))
    });
  })
}

// const promise1 = Promise.race([
//   Promise.reject(1),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   Promise.reject(3),
//   Promise.reject(4)
// ])


const promise2 = Promise.race([
new Promise((_, reject) => setTimeout(() => reject(3),
2000)),
Promise.reject(2),
'4',
new Promise((_, reject) => setTimeout(() => reject(1), 0)),
Promise.reject(5)
])


// promise1
// .then(value => console.log('resolve with value', value))
// .catch(value => console.log('reject with value', value));

promise2
.then(value => console.log('resolve with value', value))
.catch(value => console.log('rejected with value', value))