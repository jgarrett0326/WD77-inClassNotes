/* 
BRONZE

Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console.log how many letters are in each name.

*/

var myName = "Jennifer";
console.log(myName.length);

var otherName = "Jason"
console.log(otherName.length);

/*
SILVER

Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer.
Example result: My name is longer than Adam's.

*/

if (otherName.length > myName.length) {
    answer = "My name is shorter than Jason's."
} else {
    answer = "My Name is longer than Jason's"
}
console.log(answer);

/*
GOLD

In the console log include how many letters difference there are between the names.

Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!

*/

var myName;
var otherName;

let x = myName.length;
let y = otherName.length;
let a = x - y;
let b = y - x;

if (x < y) {
    console.log(`${myName} is longer by ${a}`);
} else if (y > x) {
    console.log(`${otherName} is longer by ${b}`);
}