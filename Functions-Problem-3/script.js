//step 1: define a function that accepts two arguments a string and a letter
function letterCount(){
	const letterStr = "you been living in a dream Neo";
	const eArray = ["e"]
//step 2: split the string into an array of letters
	let letterArray = letterStr.split("");

//step 3: define a loop that will run through the letters of the string
	for (let i = 0; i < letterArray.length; i++){
//step 4: count the number of occurences of the specified letter via the loop
	if (eArray.includes(letterArray[i]))
	}
//step 5: return the count of the specified letter

}