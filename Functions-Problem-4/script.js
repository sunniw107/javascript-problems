//step 1: create a function name to recall function
function fizzBuzz() {;
//step 2: create a loop that counts through 1 - 100
	for (let i = 1; i < 100; i++) {
//step 3: create a statement for the words: "Fizz" & "Buzz" to be printed from.
		let word = ""
//step 3: print "Fizz" for multiples of 3 		
		if (i % 3 ===0) {
			word += "Fizz";
		}
//step 4: print "Buzz" for multiples of 5		
		if (i % 5 ===0) {
			word += "Buzz";
		}
//step 5: print "FizzBuzz" for multiples of 3 & 5
	console.log(i, word);
	}
}

fizzBuzz();