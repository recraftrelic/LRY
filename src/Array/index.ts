export class ArrayUtils {
	public swapIndex<T>(arr: T[], sourceIndex: number, targetIndex: number): T[] {
		const arrCopy = [...arr];

		const temp = arrCopy[sourceIndex];
		arrCopy[sourceIndex] = arrCopy[targetIndex];
		arrCopy[targetIndex] = temp;

		return arrCopy;
	}

	public head<T>(arr: T[], numberOfElements: number): T[] {
		return arr.slice(0, numberOfElements);
	}

	public tail<T>(arr: T[], count: number): T[] {
		const length = arr.length;
		return arr.slice(length - count, length);
	}

	public chunks<T>(arr: T[], itemsPerChunk: number): T[][] {
		let currentChunkCounter = 0;
		let currentChunkItemCounter = 0;
		let chunkedArray: T[][] = [];

		for (let i = 0; i < arr.length; i++) {
			if (currentChunkItemCounter >= itemsPerChunk)  {
				currentChunkItemCounter = 0;
				currentChunkCounter++;
			}

			if (!chunkedArray[currentChunkCounter]) {
				chunkedArray[currentChunkCounter] = [];
			}

			chunkedArray[currentChunkCounter].push(arr[i]);
			currentChunkItemCounter++;
		}

		return chunkedArray;
	}

	public group<T>(arr: T[], key: string): { [key: string]: T[] } {
		if (!arr) {
			return {};
		}

		if (!arr.length) {
			return {};
		}

		return arr.reduce((previousValue, currentValue) => {
			let groupKey = currentValue[key];

			if (!groupKey) {
				groupKey = 'ungrouped';
			}

			if (!previousValue[groupKey]) {
				previousValue[groupKey] = [];
			}

			previousValue[groupKey] = [ ...previousValue[groupKey], currentValue ];

			return previousValue;
		}, {});
	}
}

const arrayInstance = new ArrayUtils();

export default arrayInstance;
