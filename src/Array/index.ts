export class ArrayUtils {
	public swapIndex<T>(arr: T[], sourceIndex: number, targetIndex: number) {
		const arrCopy = [...arr];

		const temp = arrCopy[sourceIndex];
		arrCopy[sourceIndex] = arrCopy[targetIndex];
		arrCopy[targetIndex] = temp;

		return arrCopy;
	}

	public tail<T>(arr: T[], count: number) {
		const length = arr.length;
		return arr.slice(length - count, length);
	}
}

const arrayInstance = new ArrayUtils();

export default arrayInstance;
