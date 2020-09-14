const chai = require('chai');
const assert = chai.assert;

describe('Test function sum of two numbers', () => {
	let fn;
	beforeEach(() => {
		fn = require('./index.js');
	});

	it('fn is a function', () => {
		assert.isFunction(fn, 'fn is a function');
	});

	it('Return value is a number', () => {
		assert.isNumber(fn(12, 20), 'is a number');
	});

	it('Correct value returned', () => {
		assert.strictEqual(
			fn(12, 20),
			32,
			'Input & Output needs to be strictly equal.'
		);
	});

	it('Wrong value returned', () => {
		assert.notStrictEqual(
			fn(12, 20),
			33,
			'Input & Output is not strictly equal.'
		);
	});
});
