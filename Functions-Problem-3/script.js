//step 1: define a function that accepts two arguments a string and a letter
function letterCount(stringForLetters, letter) {
	let letterCount = 0
//step 2: split the string into an array of letters
	let letterArray = stringForLetters.split("");

//step 3: define a loop that will run through the letters of the string
	letterArray.forEach(function(letterInArray){
//step 4: count the number of occurences of the specified letter via the loop
	if (letterInArray.toLowerCase() === letter.toLowerCase()) {
		letterCount += 1;
		}
	});
//step 5: return the count of the specified letter
	return letterCount;
}