function series(tasks, input, finalCallback) {
  let index = 0;

  function next(err, result) {
    if (err) {
      return finalCallback(err);
    }

    const task = tasks[index++];
    if (!task) {
      return finalCallback(null, result); // all done
    }

    try {
      task(next, result);
    } catch (e) {
      finalCallback(e);
    }
  }

  next(null, input); // start the chain
}



function asyncAddOne(callback, input) {
  setTimeout(() => {
    callback(null, input + 1);
  }, 100);
}

function asyncDouble(callback, input) {
  setTimeout(() => {
    callback(null, input * 2);
  }, 150);
} 

function asyncSquare(callback, input) {
  setTimeout(() => {
    callback(null, input * input);
  }, 100);
}

series([asyncAddOne,asyncDouble,asyncSquare], 2, (err, result) => {
  if(err) {
    console.error("Error: ", err);
  } else {
    console.log("Final result:", result);
  }
})