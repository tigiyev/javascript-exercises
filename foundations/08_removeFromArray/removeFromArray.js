const removeFromArray = function (ar, ...toDelete) {


	let deleteElementIndex;

	for (let i = 0; i < toDelete.length; i++) {

		while (ar.includes(toDelete[i])) {

			deleteElementIndex = ar.indexOf(toDelete[i])
			ar.splice(deleteElementIndex, 1)

			console.log("has another element!");
		}

	}

	return ar;
};

// removeFromArray([1, 2, 2, 3], 2)


// Do not edit below this line
module.exports = removeFromArray;
