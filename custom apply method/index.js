/**
 * 
 * Problem Statement
 * Implement a function apply() which is your own version of 'Function.prototype.apply' method. You should not use the in-built apply() method.
 * The apply method takes an object as first argument and sets it as the this context for the function which need to be invoked.
 * The only difference of apply() method to that of the call() method is - 
 * 
 * the apply() method then optionally takes any arbitrary number of arguments in an array like format that needs to be passed to the function that 
 * need to be invoked.
 * func.call(thisArg, [arg1, arg2, arg3, ...., argN]);
 * 
 * 
 */

Function.prototype.myApply = function(context, argsArray) {
    // If context is null or undefined, set to globalThis (window in browsers)
    context = context || globalThis;
  
    // Create a unique property to avoid overwriting existing ones
    const fnSymbol = Symbol();
  
    // Assign this function to the context
    context[fnSymbol] = this;
  
    // Call the function with the provided args
    const result = context[fnSymbol](...argsArray);
  
    // Remove the temporary property
    delete context[fnSymbol];
  
    return result;
};

function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}
  
  const person = { name: "Alice" };
  
  console.log(greet.myApply(person, ["Hello", "!"])); 
  // Output: "Hello, Alice!"
  
  