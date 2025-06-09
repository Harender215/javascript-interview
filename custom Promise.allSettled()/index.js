function allSettled(input) {
  const result = {};
  let totalSettled = 0;
  return new Promise((resolve, reject) => {
    if (input.length === 0) {
      return resolve(result);
    }
    input.forEach((elem, index) => {
      Promise
        .resolve(elem)
        .then((val) => {
          result[index] = { "status": "fulfilled", val }
          totalSettled++;
          if (totalSettled === input.length) {
            resolve(result);
          }
        })
        .catch((reason) => {
          result[index] = { "status": "reject", reason }
          totalSettled++;
          if (totalSettled == input.length) {
            resolve(result);
          }
        });
    })
  })
}

const promise1 = allSettled([
  Promise.resolve(1),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  Promise.resolve(3),
  Promise.reject(4)
])

promise1
  .then(value => console.log('Resolved with', value))
  .catch(value => console.log('Rejected with', value))