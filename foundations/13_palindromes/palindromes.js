const palindromes = function (string) {

	// remove punctuation (" ", ",", ".", "!")

	// v1
	// let clean = string.split(' ').join('').split(',').join('').split('.').join('').split('!').join('').toLowerCase();
	// console.log(clean);

	// v2 
	let clean = string.split(/[,. !]/).join('').toLowerCase();

	let reversed = clean.split('').reverse().join('')
	console.log(reversed);

	return clean === reversed;
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
