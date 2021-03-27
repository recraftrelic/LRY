import { ArrayUtils } from '../index';
import { expect } from 'chai';
import 'mocha';

const arrayInstance = new ArrayUtils();

const numbers = [1, 2, 3, 4, 5];

describe('chunk elements', () => {
	it('it should return a list of chunks extracted from given array', () => {
		const chunks = arrayInstance.chunks<number>(numbers, 2);
		expect(chunks).to.eql([
			[1, 2],
			[3, 4],
			[5]
		]);
	});
});
