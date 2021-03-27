import { ArrayUtils } from '../index';
import { expect } from 'chai';
import 'mocha';

const arrayInstance = new ArrayUtils();

const numbers = [1, 2, 3, 4, 5];

describe('tail elements', () => {
	it('it should return tail elements from given array', () => {
		const swappedArray = arrayInstance.tail<number>(numbers, 2);
		expect(swappedArray).to.eql([4, 5]);
	});
});
