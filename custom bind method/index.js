Function.prototype.myBind = function(context, ...bindArgs) {
    const fn = this;
  
    return function(...callArgs) {
      return fn.apply(context, [...bindArgs, ...callArgs]);
    };
  };
  

  function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
  const person = { name: "Bob" };
  
  const greetBob = greet.myBind(person, "Hello");
  greetBob("!"); // "Hello, Bob!"
  

  