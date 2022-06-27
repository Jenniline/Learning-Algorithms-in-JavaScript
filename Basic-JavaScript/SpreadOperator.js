/** Use the Spread Operator to Evaluate Arrays In-Place */

const arr = [20,30,40,50]
const maximus = Math.max.apply(null,arr)

/** We had to use Math.max.apply(null, arr) 
 * because Math.max(arr) returns NaN. Math.max() 
 * expects comma-separated arguments, but not an array. 
 * The spread operator makes this syntax much better to read and maintain. */

const maximus1 = Math.max(...arr)

const arr1 = ['JAN','FEB','MARCH','APR','MAY']
let arr2

arr2 = [...arr1]
console.log(arr2);

/** Destructuring allows you to assign a new variable 
 * name when extracting values. You can do this by putting
 *  the new name after a colon when assigning the value. */

/** Using the same object from the last example:*/ 
 const user = { name: 'John Doe', age: 34 };
/** Here's how you can give new variable names in the assignment:*/ 
 const { name: userName, age: userAge } = user;

 const source = [1,2,3,4,5,6]
function removeFirstTwo(list) {
    const [a,b, ...arrr] = list

    return arrr;

}

 
/** Use t  */