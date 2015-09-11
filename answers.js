//Javascript basics

//Function that returns the first character of a string

function firstCharacter (string) {
    return string[0];
}


firstCharacter("Hello");

firstCharacter("Ulaize");

firstCharacter("");

//Function that returns the last character of a string

function lastCharacter (string) {
    return string[string.length-1]
}

lastCharacter("Hello");

lastCharacter("Ulaize");

lastCharacter("");

//Function that returns the character of a string and you chose the position 
//of the character.

function tellMeTheCharacter (string,number){
    return string[number-1]
}

tellMeTheCharacter("What's up?",3);

tellMeTheCharacter("Hello", 5 );

tellMeTheCharacter("", 5 );

///Create a function that add two numbers and see what happens when you input
//something that is not a number.

function addNumbers (num1,num2){
    return (num1 + num2)
}

addNumbers(5,6);

addNumbers(10,-6);

addNumbers("love","hate");

//The function returns "lovehate"

addNumbers("love",7);

//function returns "love7"



//Function that multiplies two numbers

function multiply (num1,num2){
    return num1*num2;
}

multiply(5,5);

multiply(5,-5);

multiply("hello","hello");

//Function returns "NaN"

multliply("hello",5);

//Tonicdev returns "ReferenceError {}"





