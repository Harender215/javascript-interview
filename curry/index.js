function curry(func) {
    return function curriedFunc(...args) {
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }        
        }
    }
}

const sum = (a,b,c,d) => a + b + c + d;

const totalSum = curry(sum);
console.log(totalSum(1)(2)(3)(4));