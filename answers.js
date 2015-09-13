//Javascript basics

//Function that returns the first character of a word/phrase

function firstCharacter (string) {
    return string[0];
}


firstCharacter("Hello");

firstCharacter("Ulaize");

firstCharacter("");

//Function that returns the last character of a word/phrase

function lastCharacter (string) {
    return string[string.length-1]
}

lastCharacter("Hello");

lastCharacter("Ulaize");

lastCharacter("");

//Function that returns the character of a word/phrase and you chose the position 
//of the character.

function tellMeTheCharacter (string,number){
    return string[number]
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





//I created a function that provides a few arethmetic operations

function maths (num1,num2,string){
    if(string==="add"){
        return num1+num2;
    }
    else if (string==="subtract"){
        return num1-num2;
    }
    else if (string==="mult"){
        return num1*num2;
    }
    else if (string==="div"){
        return num1/num2;
    }
    else{
        return 0;
    }
}


maths(25,5,"add");

maths(25,5,"subtract");

maths(25,5,"mult");

maths(25,5,"div");

maths(25,5,"whatever");

maths(25,5,4);

///Repeating a string x number of times.

function repeatString (string,num){
    var finalString= "";
    for (i = 0; i< num; i++) {
        finalString = finalString + string;
    }
    return finalString;
}

repeatString("hello",2);

repeatString("hello",5);


//function that reverses the order of the characters in a word/phrase 

function reverse(s){
    return s.split("").reverse().join("");
}

reverse("hello");

reverse("ulaize");

//function to get factorial of a number

function fact(num) {
   if(num===0) {
      return 1;
   }
   else {
       return num * fact(num-1);
   }
}

fact(5);
fact(10);
fact(4);
fact(-3);


//Function that returns the longest word in a phrase or paragraph.
//In case there are two of the same length, the first occurance is returned.
//Finding this exercise difficult and draining my energy
//I am going to move to the next exercise but going to commit it for now.

function words (x){
   var y="";
    for ( i=0 ; i < x.length; i++){
        if (x[i] == "," || x[i] == ".") {
           y  += " ";
        }
        else{
            y += x[i];
    
        }
    }
    return y.split(' ');
}

var myWords = words("i love chocolate, pizza, and sometimes ice cream. I am really unhealthy.");

myWords.sort();

myWords.sort(function(a, b){return b-a});  


