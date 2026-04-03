const reverseString = function (str) {
	// make loop in reverse order??
	// console.log(str);

	let rStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		// console.log(str[i]);
		rStr += str[i];
	}
	return rStr;
};

// Do not edit below this line
module.exports = reverseString;
