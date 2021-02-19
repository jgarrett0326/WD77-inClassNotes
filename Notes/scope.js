/*
    Scope is the hierarchy of variables in out code. We call them:
    -Global Scope or Parent Scope
    -Local Scope ot Child Scope
*/

let global = 'Earth'

function scopeExample() {
    let local = 'Indianapolis';
    let inner = 'It has many places to visit';
    console.log(local);
    console.log(`${local} is a humble city on ${global}`)
    if(true) {
        let inner = 'What a large city';
        console.log(inner);
    }
    console.log(inner);
}

scopeExample();
// not defined, blocked out by scope
// console.log(local);