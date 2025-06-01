/**
Problem Statement
Implement a `flatten()` function which will flatten the original
array into a new array to the `depth` of arr given in the
question. `depth` is any value up to which you need to flatten
the deeply nested arrays in the original array.
**/


const arr = [1, [2], [3, [4]]];

function flatten(arr, depth) {
    let result = [];

    function dfs(current, d) {
        for (let i = 0; i < current.length; i++) {
            if (Array.isArray(current[i]) && d > 0) {
                dfs(current[i], d - 1);
            } else {
                result.push(current[i]);
            }
        }
    }

    dfs(arr, depth);
    return result;
}

console.log(flatten(arr, 1)); // Output: [1, 2, 3, [4]]
