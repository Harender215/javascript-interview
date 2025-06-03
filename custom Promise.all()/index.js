function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
      if(!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }
  
      const results = [];
      let completed = 0;
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completed++;
  
          //if all the promises are resolved, resolve the outer promise
          if(completed === promises.length) {
            resolve(results)
          }
        })
        .catch(error => reject(error));
      })
  
      //Handle empty error case
      if(promises.length == 0) {
        resolve([]);
      }
    });
  }
  
  
  const p1 = Promise.resolve(1);
  const p2 = 42
  const p3 = new Promise(resolve => setTimeout(() => resolve(3), 100));
  
  customPromiseAll([p1, p2, p3])
  .then(results => {
    console.log("All resolved", results);
  })
  .catch(err => {
    console.log("One failed:", err);
  })