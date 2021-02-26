/*
ARRAYS
*/
//We use arrays to store multiple values within an array

// let array = ['value1', 'value2', 'value3'];

// //This is how to target specific values in an array
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

//If we don't know the length of the array, use .length to find the amount of items in the array
// console.log(array.length);

// //We can create objects using an array constructor
// let test = new Array();
// console.log(test);

// let test2 = new Array(3);
// console.log(test2);

// console.log(test2.length);

// let array = ['value1', 'value2', 'value3'];

// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// array.forEach((value) => console.log(value));

// array.forEach((value) => {
//     console.log(value);
// })

// array.forEach(function(value){
//     console.log(value);
// })

//.length method returns the length of the given array
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.length);

//Array.push adds an element to the end of the array
// shoppingList.push('salt');
// console.log(shoppingList);

//array.pop will remove the last element from in the array and return it
// shoppingList.pop();
// let grenadine = shoppingList.pop();
// console.log(shoppingList);
// console.log(grenadine);

//array.unshift will add a new element at the beginning of the array
// shoppingList.unshift('salt');
// console.log(shoppingList);

//array.shift will remove the first item of the array
// shoppingList.shift();
// console.log(shoppingList);

//array.map transforms the elements in the original array by calling the given function once for each element in the array
// console.log(shoppingList.map((value) => value.toUpperCase()));

//array.filter  creates a new array with only the elements that pass a give test in a function
// console.log(shoppingList.filter(value => value.startsWith('l')));

//array.find will return the first element in an array that passes a test from a function
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.find(value => value.startsWith("l")));

//array.reduce executes a given function for each value of an array and then returns the value
// let cost = [2.00, 3.00, 4.00, 13.00];
// console.log(cost.reduce((total, cost) =>{
//     console.log(total)
//     return total + cost;
// }));

// let cost = [1, 1, 1, 1, 1, 1];

// console.log(cost.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 10))

//array.includes determines whether an array has a specific element
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.includes('limes'));
// console.log(shoppingList.includes('salt'));

//array.indexOf searches the array for a specific element and will return the first index of it
//it will return -1 if it's not found
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.indexOf(('lemons')));
// console.log(shoppingList.indexOf(('salt')));

//array.findIndex returns the index of the first element of an array that passes the test in a given function
//will return -1 if that element is not found
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.findIndex(value => value.startsWith('g')));
// console.log(shoppingList.findIndex(value => value.startsWith('y')));

//array.every will check if all the elements in the array to see if they can pass a test in a given function
//if one element returns as false, the function returns false and does not continue to check the rest of the elements
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.every(value => value.length > 1));
// console.log(shoppingList.every(value => value.startsWith('c')));

//array.concat will merge two or more arrays together and return it as a new array
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// let anotherList = ['salt', 'mint leaves', 'olives'];
// console.log(shoppingList.concat(anotherList));

//array.slice will select a part of an array and return a new array. you can select the elements by providing a start and end argument
//which will be indicated by the index, it will not include the end argument.
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.slice(1, 3));

//array.splice will add or remove elements in an array abd returns the removed elements.
//First argument takes in an integer that specifies at what index to add/remove elements.
//second argument takes in the number of items to be removed
// optional third argument takes in new elements to be added to the array
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// let anotherList = ['salt', 'mint leaves', 'olives'];
// // shoppingList.splice(2, 1);
// // console.log(shoppingList);

// shoppingList.splice(2, 1, 'cherries', 'salt', anotherList);
// console.log(shoppingList);

//array.sort will sort the items in an array. the sort order can be alphabetic or numeric, and either ascending or descending
//by default, sort() orders the values as strings in alphabetical and ascending order.
//it can take in a compare function to decided whether you want it ascending or descending
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.sort());

// let nums = [25, -9, 15, 1000];

// //descending order
// console.log(nums.sort((a, b) => b - a));

// //ascending order
// console.log(nums.sort((a, b) => a - b));

//array.reverse will reverse the order of the elements in an array
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.reverse());

//array.toString will convert an array to a string
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.toString());

//array.join converts the elements of an array into a string.
//can accept an optional parameter, 'separator', which indicates how the elements will be separated.
//the default separator is a comma
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(shoppingList.join("! and ")); //does not print after the last element because there is nothing to separate

//spread operator: it's indicated by a 3 dots, "..."
//it expands the contents of the array and takes it out of the array structure
// let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges'];
// console.log(...shoppingList);