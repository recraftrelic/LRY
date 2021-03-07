import { ArrayUtils } from '../index';
import { expect } from 'chai';
import 'mocha';

const arrayInstance = new ArrayUtils();

const numbers = [1, 2, 3, 4, 5];

describe('head elements', () => {
	it('it should return head elements from given array', () => {
		const swappedArray = arrayInstance.head<number>(numbers, 2);
		expect(swappedArray).to.eql([1, 2]);
	});
});
