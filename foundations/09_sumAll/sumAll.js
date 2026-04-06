const sumAll = function (a, b) {

	if (Number.isInteger(a) && Number.isInteger(b)) {
		if (typeof a === 'number' && typeof b === 'number') {
			if (a > 0 && b > 0) {

				let from, to;

				if (a < b) {
					from = a;
					to = b;
				}
				else {
					from = b;
					to = a;
				}


				let sum = 0;
				let dif = to - from;
				let prevVal = 0

				for (let i = 0; i <= dif; i++) {
					sum = from + i + prevVal;
					prevVal = sum;

					console.log(sum);
				}

				return sum;

			} else return "ERROR"
		} else return "ERROR"
	} else return "ERROR"
};

sumAll(2, 4) // 9
// 2,3,4
// 2 + 2+1 + 2+2

// Do not edit below this line
module.exports = sumAll;
