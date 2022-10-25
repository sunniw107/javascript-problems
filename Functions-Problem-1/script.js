
//step 1: define a javascript function that accepts a string as a parameter.
let wordString = 'you been living in a dream Neo';

//step 2: split the string passed in, turn it into an array of each word,
store it in a variable
function findLongestWord(word) {
	const wordArray = wordString.split(" ");
	
	let longestWord = "";

//step 3: start looping through an array of words
	for (let i = 0; i < wordArray.length; i++) {
		console.log(wordArray[i].length)

			if (wordArray[i].length > longestWord.length) {
			longestWord = wordArray[i];
		}
	}
//step 4: return the longest word
	return longestWord;
}

