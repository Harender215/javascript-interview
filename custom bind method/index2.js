Function.prototype.bind = function(context) {
	context = context || globalThis;
	const fnSymbol = Symbol();
	context[fnSymbol] = this;

	return function(...args) {
		const result = context[fnSymbol](...args);
		delete context[fnSymbol];
		return result;
	};
}

const person = {
	name: 'Alice',
	Age: 26
}

function greeting(greet, punctution) {
	return `${greet} ${this.name} ${punctution}`;
}

const resFunc = greeting.bind(person);
const res = resFunc("Hi", "!");
console.log(res); // Hi Alice !