/** In JavaScript, we often don't need to name our functions, 
 * especially when passing a function as an argument to another function. 
 * Instead, we create inline functions. 
 * We don't need to name these functions because we do not reuse them anywhere else.
To achieve this, we often use the following syntax: */

 const unNamedFunction = function () {
    const myVar = "Value"
    return myVar
}

const unNamedFunction1 = () => {
    const myVar = "Value"
    return myVar
}

const unNamedFunction2 = () => "value"

/**Arrow Functions with Parameters. Just like a regular function, you can pass arguments into an arrow function.*/  

const doubler = (item) => item * 2
doubler(4)

/**If an Arrow Function has a single parameter the parentheses enclosing the parameters can be enclosed */
const doubler1 = item => item * 2

/** It is possible to pass more than one argument into an arrow function.*/
const multiplier = (item, multpl) => item * multpl 
multiplier(4,2)

/**Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax. */

const myConcat = (arr1,arr2) => arr1.concat(arr2)

/**Default Parameters in Arrow Functions */

const increment = (number,value = 1) => number + value
console.log(increment(5,2))

function howMany(...args) {
    return "You have passed " + args.length + "arguments";
}
console.log(howMany(1,2,3))
console.log(howMany("string",null,[a,b,c],{}))


/** You have passed 3 arguments. and You have passed 4 arguments.. */

/** Modify the function sum using the rest parameter in such 
 * a way that the function sum is able to take any number of arguments and return their sum. */

const sum = (...args) => args.reduce((a, b) => a + b, 0)