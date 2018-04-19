function findStr(arr, str) {
	let lowerArray = arr.map(elem => elem.toLowerCase());
	let lowerStr = str.toLowerCase();
	return lowerArray.some(elem => elem.includes(lowerStr));
}


