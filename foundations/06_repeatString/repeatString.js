const repeatString = function () {
	// console.log(arguments[0]); hey
	// console.log(arguments[1]); 3

	if (arguments[1] >= 0) {
		let fullStr = "";
		for (let i = 0; i < arguments[1]; i++) {
			fullStr = fullStr + arguments[0];

			console.log(fullStr);
		}

		return fullStr
	}
	else return "ERROR";

};

// Do not edit below this line
module.exports = repeatString;
