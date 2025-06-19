class MyPromise {
  constructor(executor) {
    this.state = 'pending'; // 'fulfilled' or 'rejected'
    this.value = undefined;
    this.reason = undefined;
    this.thenCallbacks = [];
    this.catchCallbacks = [];

    const resolve = (value) => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.value = value;
      this.thenCallbacks.forEach(cb => cb(value));
    };

    const reject = (reason) => {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      this.reason = reason;
      this.catchCallbacks.forEach(cb => cb(reason));
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled) {
    return new MyPromise((resolve, reject) => {
      const handleCallback = () => {
        try {
          const result = onFulfilled(this.value);
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === 'fulfilled') {
        handleCallback();
      } else if (this.state === 'pending') {
        this.thenCallbacks.push(handleCallback);
      }
    });
  }

  catch(onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleCallback = () => {
        try {
          const result = onRejected(this.reason);
          result instanceof MyPromise ? result.then(resolve, reject) : resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === 'rejected') {
        handleCallback();
      } else if (this.state === 'pending') {
        this.catchCallbacks.push(handleCallback);
      }
    });
  }
}


const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // reject("Something went wrong");
  }, 1000);
});

p.then((data) => {
  console.log("Resolved with:", data);
  return "Chaining";
}).then((msg) => {
  console.log(msg);
}).catch((err) => {
  console.log("Error:", err);
});
