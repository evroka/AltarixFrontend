function sum (arr) {
	if (arr.length === 0)
		return 0;
	return arr.reduce((x, y) => y += x);
}