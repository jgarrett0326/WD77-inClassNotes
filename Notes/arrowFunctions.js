/*
ARROW FUNCTIONS


*short or concise way to write functions*
    - aka Fat Arrow Functions
    - NOT declarations
    - Do NOT get hoisted

    - Two types:
        - Concise Body: return is automatic
        - Block Body: return is not automatic

*/

//! CONCISE BODY (shorter way to write an arrow function)
// speak('dog'); // error: Arrow functions cannot be hoisted
let speak = (name) => console.log(`The ${name} goes woof!`); 
speak('dog');


//! w RETURN
let firstName = 'Jerome';
let lastName = 'Flaherty';

let concatName = (first, last) => `${first} ${last}`;
console.log(concatName(firstName, lastName));

//! BLOCK BODY  //if you have only one parameter, you do not need (), no parameters or multiple parameters need ()
let speakAgain = name => {
    console.log(`The ${name}`);
    console.log('goes woof!')
}
speakAgain('dog');
//console.log(speakAgain('Frederick')); // taking this down to the most basic information that there is when you console.log // runs function, then console.logs the result of the function.
//speakAgain(123);

let concat = (first, last) => {
    console.log('testing');
    console.log('another test');
    console.log('raisins');
   return `${first} ${last}`
}
let fullName = concat('Jerome', 'Flaherty');
console.log(fullName);

let x = 9;
let y = 10;

let answer = (num1, num2) => {
    let sum = (num1 + num2); // do not use a defined variable here so that you can run ANY number through this function
    return sum;
}
console.log(answer(x, y));