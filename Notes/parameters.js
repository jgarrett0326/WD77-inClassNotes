/*
! Parameters





    - Paremeters are values we haven't assigned yet.
    - Passed through functions called as arguments
    
    ex:
        function nameFunc (parameter) {
            return ...
        }
        
        nameFunc(argument);
*/

function coffeePot(filter) {
    console.log(`I brewed some ${filter}.`);
}

coffeePot('dark roast');
coffeePot('medium roast');
coffeePot('peppermint tea');

let kettle = coffeePot; // <-- function reference
kettle(); // <-- returns undefined where our value should be
kettle('green tea');


//! MULTIPLE PARAMETERS & ARGUMENTS

function dinner(main, side, drink) {
    console.log(`For dinner I had ${main} and ${side}. To wash it down, I had a ${drink}.`);
}

dinner('steak', 'potatoes', 'coke');
dinner('potatoes', 'coke', 'steak');
// - arguments fall in line with parameters regarding their position

//! RETURN
// - Functions can manipulate our data and return a new value.

function calc(one, two, three) {
    let total = one + two + three;
    let average = Math.round(total / 3); //Math.round() roudns to value nearest integer   
    return average;
}

let avgWeight = calc(15, 60, 55);
console.log(`These three dogs weigh an average of ${avgWeight} lbs.`);
console.log(calc(18, 20, 22));

