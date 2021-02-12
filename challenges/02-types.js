/*
Bronze

Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.

*/


let person = {
    firstName:"Jennifer",
    age: 33,
    hobby:"Play softball",
    hasKids: true,
    personalInfo: {
        PhoneNumber: 317-448-3834,
        StreetName: "Park Forest Drive East" 
    }
};
console.log(person.personalInfo.StreetName);

//above code was what I came up with. Below code is what we went through as a class.

/*
let obj = {
    str: 'ABCD',
    num: 35,
    bool: true,
    arr: [1, "abcd", false, 20],
    objTwo: {
        one:'string'
    },
}
console.log(typeof obj.str);
*/

/*
SILVER

Write a conditional that checks the type of one of the values stored in the object and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'

*/

//I did not even get an answer to this from the information that I provided.

//let value = typeof obj.str;
//console.log('value:', value)

let value = typeof person.age;

if(value === 'string') {
    console.log("This value is a string");
} else if (value === 'number') {
    console.log('This value is a number');
} else if (value === 'boolean') {
    console.log('This value is a boolean');
} else if (value === 'object') {
    console.log('This value is an object');
} else {
    console.log('What are you?!');
}

