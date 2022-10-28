//step 1: define a JavaScript Function that accepts a string as a parameter
function findthevowels(vowels) {

//step 2: define a variable that knows what a vowel is using a vowel array
	const vowelArray = ["a", "e", "i", "o", "u"];

//step 3: define a variable and set the value to 0
	let vowelCount = 0;

//step 4: split the string by letters into an array and store it in a variable
	const letterArray = vowels.toLowerCase().split("");

//step 5: start looping through an array of letters
	for (let i = 0; i < letterArray.length; i++) {

//step 6: check the letters in our loop for a vowel
	if (vowelArray.includes(letterArray[i]); {

//step 7: increase the count variable by one for every vowel.		
		vowelCount += 1;	
		}
	}
//step 8: Return the number of vowels in the string.
return vowelCount;

}


