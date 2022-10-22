/*
step 1: define a javascript that accepts a string as a parameter.
step 2: split the string passed in, turn it into an array of each individual letter,
store it in a variable
step 3: define a variable called numberOfVowels, and set the inital value to be equal to 0;
step 4: define a variable that defines what a vowel is, an array of vowels
step 5: start looping through an array of letters
step 6: check if the current letter in our loop is a vowel
step 7: increase the numberOfVowels by one for every letter that's a vowel
step 8: return the numberOfVowels
*/

var vowelString = 'now you see it';

const stringArray = vowelString.split("");

var numberOfVowels = 0;