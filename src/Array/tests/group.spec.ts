import { ArrayUtils } from '../index';
import { expect } from 'chai';
import 'mocha';

const arrayInstance = new ArrayUtils();

interface Person {
	name?: string,
	age?: number,
	designation?: string,
}

const Persons: Person[] = [
	{
		name: "Manoj",
		age: 23,
		designation: "Software Developer",
	},
	{
		name: "John",
		age: 21,
		designation: "Designer",
	},
	{
		name: "Kelly",
		age: 22,
	},
	{
		name: "James",
		age: 25,
		designation: "Project Manager",
	},
	{
		name: "Raymond",
		age: 25,
		designation: "Software Developer",
	}
];

describe('chunk elements', () => {
	it('it should return a list of groups extracted from given array', () => {
		const groupedData = arrayInstance.group<Person>(Persons, 'designation');
		expect(groupedData).to.eql({
			"Software Developer": [
				{
					name: "Manoj",
					age: 23,
					designation: "Software Developer",
				},
				{
					name: "Raymond",
					age: 25,
					designation: "Software Developer",
				}
			],
			"Designer": [
				{
					name: "John",
					age: 21,
					designation: "Designer",
				}
			],
			"Project Manager": [
				{
					name: "James",
					age: 25,
					designation: "Project Manager",
				}
			], "ungrouped": [
				{
					name: "Kelly",
					age: 22,
				}
			]
		});
	});

	it('it should return an empty object when array length is zero', () => {
		const groupedData = arrayInstance.group<any>([], 'key');
		expect(groupedData).to.eql({});
	});
});
