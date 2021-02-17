/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

var fb;
for (fb = 1; fb <= 50; fb++) {
    if ((fb % 3 == 0) && (fb % 5 == 0)) {
    console.log ("Fizz Buzz")
} else if (fb % 3 == 0) {
    console.log ("Fizz")
} else if (fb % 5 == 0) {
    console.log("Buzz")
} else {
    console.log(fb)
}
}

//Ternary
let fb = 15; 

fb % 5 == 0 && fb % 3 == 0 ? console.log("Fizz Buzz") :
fb % 3 == 0 ? console.log('Fizz') :
fb % 5 == 0 ? console.log ('Buzz') :
console.log(fb)

//Switch
let fb = 15;
switch (true) {
    case (fb % 3 === 0 && fb % 5 === 0) :
        console.log('Fizz Buzz');
        break;
    case (fb % 5 === 0) :
        console.log('Buzz');
        break;
    case (fb % 3 === 0) :
        console.log('Fizz');
        break;
    }
