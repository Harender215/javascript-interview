const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};  

// { a: 1, b: 2, d: 3, e: 4 }


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

// { a: 1, b: 2, d: 3, e: 4, g: 5, h: null, j: 'Hi' }

function flatten(obj) {
    let result = {};

    function dfs(current) {
        for (let key in current) {
            const value = current[key];
            if (typeof value === "object" && value !== null && !Array.isArray(value)) {
                dfs(value);
            } else {
                result[key] = value;
            }
        }
    }

    dfs(obj);
    return result;
}

console.log(flatten(obj1));

console.log(flatten(obj2));