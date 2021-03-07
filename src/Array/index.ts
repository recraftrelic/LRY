export class ArrayUtils {
	public swapIndex<T>(arr: T[], sourceIndex: number, targetIndex: number) {
		const arrCopy = [...arr];

		const temp = arrCopy[sourceIndex];
		arrCopy[sourceIndex] = arrCopy[targetIndex];
		arrCopy[targetIndex] = temp;

		return arrCopy;
	}

	public head<T>(arr: T[], numberOfElements: number) {
		return arr.slice(0, numberOfElements);
	}
}

const arrayInstance = new ArrayUtils();

export default arrayInstance;
