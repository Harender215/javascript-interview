/**
 * Implement custom call method
 * problem statement
 * Implement a function 'call' which is your own version of the 'Function.prototype.call' method. you should not use inbuild call() method.
 * The 'call()' method takes an object as the first argument and sets it as the 'this' context for the function which needs to be invoked.
 * 
 * The 'call()' method then optionally takes any arbitrary number of arguments that need to be passed to a function that need to be invoked.
 * // syntax
 * func.call(thisArg, arg1, arg2, arg3, ..... argN)
 * 
 */

Function.prototype.myCall = function (context, ...args) {
    // If context is null or undefined, default to global object (window in browser)
    context = context || globalThis;
  
    // Create a unique property on the context to avoid overwriting existing ones
    const fnSymbol = Symbol();
  
    // Assign the function (this) to the context's unique property
    //In this line, this refers to the function on which myCall is being invoked.

    context[fnSymbol] = this;
  
    // Call the function and capture the result
    const result = context[fnSymbol](...args);
  
    // Remove the temporary property
    delete context[fnSymbol];
  
    return result;
};

function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}
  
  const person = { name: "Alice" };
  
  // Using custom myCall
  const result = greet.myCall(person, "Hello", "!");
  console.log(result); // Output: Hello, Alice!
  
  