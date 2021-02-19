/*

What does hoisting mean and what does it do? Think of it like opening a book with multiple chapters. One of the first pages in the book might be an index or table of contents with a list of the various chapters you might find. We can look at this page to get an idea of what information we can expect to find in the book later.

Hoisitng does this in a similar way. There are two phasees that happen when we run our code:
 - Creation Phase: Any variable (var, let, const) and function in our code are stored in memory.
 - Execution Phase: Values are assigned to the variables and functions that are stored in memory during the creation phase.

 What's on the left of the = sign is stored to memory during the creation phase. What's on the right is assigned during the execute phase.
    (creation)  (execution)
 let variable = 'value';

 When Javascript runs, it first reads top to bottom and stores the variables, kind of like putting the chapter names in the index.After that, it reads top to bottom again in sequential order to fill out the value of each chapter.

*/

let num = 12;
console.log(num);

sayHi();

function sayHi() {
    console.log('Hello');
    let hi = 'Hola';
    console.log(hi);
}

// Hoisting is not something that you typically want to use, you just want to be aware of what it does.

// not defined
// varFunc();

//            (anonymous function) - hoisting does not work with anonymous functions.  
let varFunc = function () {
    console.log('Testing. Testing');
}
varFunc();