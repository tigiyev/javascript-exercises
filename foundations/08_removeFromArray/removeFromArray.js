const removeFromArray = function (ar, ...toDelete) {

	// remove multiple with the same value

	console.log(toDelete);
	let index;

	for (let i = 0; i < toDelete.length; i++) {
		index = ar.indexOf(toDelete[i])
		ar.splice(index, 1)
	}




	return ar;
};

// removeFromArray([1, 2, 2, 3], 2)


// Do not edit below this line
module.exports = removeFromArray;
