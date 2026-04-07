const leapYears = function (year) {

	// devided by 4 +
	// devided by 100 -
	// devided by 400 +

	if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
		console.log(year + " is leap year!");
		return true
	}
	else {
		console.log(year + " is NOT leap year!");
		return false
	}

};

// leapYears(1996)

// Do not edit below this line
module.exports = leapYears;
