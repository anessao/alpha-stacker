var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function stackLetters (letters) {
	var newLetters = [];
	for (var i = 0; i < letters.length; i++) {
		newLetters.push(letters[i]);
		if (i % 3 === 2) {
			newLetters.push(' ');
		}
		console.log(newLetters.toString().replace(/,/g, ''));
	}
}
