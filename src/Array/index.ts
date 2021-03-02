export class ArrayUtils {
	public swapIndex<T>(arr: T[], sourceIndex: number, targetIndex: number) {
		const arrCopy = [...arr];

		const temp = arrCopy[sourceIndex];
		arrCopy[sourceIndex] = arrCopy[targetIndex];
		arrCopy[targetIndex] = temp;

		return arrCopy;
	}
}

const arrayInstance = new ArrayUtils()

export default arrayInstance
