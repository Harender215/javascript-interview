/*
Problem Statement
    Implement a `flattenWithPrefix()` function which will flatten the
    original Object into a new Object. This function will also take
    `prefix` as an argument which will be a string denoting the
    representation of keys or properties to access the current
    value in the deeply nested object.
    We use the dots "." notation in the prefix string between keys
    or properties to denote the representation of accessing a
    value in a deeply nested object.
*/

const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }   
};

// { a: 1, b: 2, 'c.d': 3, 'c.e': 4 }
    
const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            g: 5
        },
        h: null
    },
    j: 'Hi'
};

// { a: 1, b: 2, 'c.d': 3, 'c.e': 4, 'c.f.g': 5, 'c.h': null, j:'Hi' }


function flattenWithPrefix(obj, psf) {
    const result = {};

    function dfs(current, prefix) {
        for (let key in current) {
            const value = current[key];
            const newPrefix = prefix ? prefix + "." + key : key;

            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
                dfs(value, newPrefix);
            } else {
                result[newPrefix] = value;
            }   
        }
    }

    dfs(obj, psf);
    return result;
}


console.log(flattenWithPrefix(obj2, ""))