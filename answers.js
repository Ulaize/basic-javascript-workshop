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

