//step 1: create a string with
const wordString = "you been living in a dream Neo";

//step 2: split the string by letters into an array and store it in a variable
function findthevowels(wordString) {
	const letterArray = wordString.split("");

//step 3: define a variable and set the value to 0
	let vowelCount = "";

//step 4: define a variable that knows what a vowel is using a vowel array
	const vowelArray = [a, e, i, o, u];

//step 5: start looping through an array of letters
	for (let i = 0; i < letterArray.length; i++) {

//step 6: check the letters in our loop for a vowel
	vowelArray.forEach(item => {
		if(vowelCount[item]) {
			vowelCount[item]++;
		} else {
			vowelCount[item] = 1;
		}
	});

//step 7: 
	}
}

console.log(vowelCount)
