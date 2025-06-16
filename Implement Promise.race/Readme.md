# Implement Promise.race

- Implement a polyfill of `Promise.race()` function. And you
should not use the built-in function directly for the problem,
instead write your own version.

- Promise.race() is a helper function that runs multiple promises
in parallel and returns a promise which resolves or rejects
based on whichever promise settles first.


# Visual Examples

- Case 1: Promise.race resolves with the value if the first
settled promise is resolved.


- Case 2: Promise.race also rejects with the reason if the first
settled promise is rejected.