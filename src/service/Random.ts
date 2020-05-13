export const getRandomInt = (max: number | undefined): number[] => {
	let param = max || 0;
	const num1 = Math.floor(Math.random() * Math.floor(param));
	let num2 = Math.floor(Math.random() * Math.floor(param));
	if (num1 !== num2) {
		const arr = [num1, num2, Math.floor(Math.random() * Math.floor(2))];
		return arr;
	} else {
		return getRandomInt(param);
	}
};
