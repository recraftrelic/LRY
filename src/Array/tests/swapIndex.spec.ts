import { ArrayUtils } from '../index';
import { expect } from 'chai';
import 'mocha';

const arrayInstance = new ArrayUtils()

interface User {
	name: string,
	age: number
}

describe('Swap Index', () => {
	it('it should swap indexes of a given array', () => {
		const arr: User[] = [
			{
				name: "Manoj",
				age: 20
			},
			{
				name: "Harish",
				age: 25
			},
		]

		const swappedArray = arrayInstance.swapIndex<User>(arr, 0, 1);

		expect(swappedArray).to.eql([
			{
				name: "Harish",
				age: 25
			},
			{
				name: "Manoj",
				age: 20
			},
		])
	})
})
