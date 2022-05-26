/**Template literals allow you to create multi-line
 *  strings and to use string interpolation features to create strings
 * 
 */
const person = {
    name: "Tiffany",
    age: 40
}
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old. `;

console.log(greeting);

const result ={
    success: ["max-length", "no-amd","prefer-arrow-functions"],
    failure: ["no-var","var-on-top","linebreak"],
    skipped: ["no-extra-semi", "no-dupe-keys"]
};

 function makeList(arr) {
    const failureItems = []
    for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>,`)
        
    }
    return failureItems
 }
 const failuresList = makeList(result.failure)
 console.log(failuresList)

 /** Write Concise Declarative Functions with ES6*/
/** When defining functions within objects in ES5,
 *  we have to use the keyword function as follows:  */
 const person1 = {
    name : "Taylor",
    sayHello:function() {
        return `Hello! My name is ${this.name}.`;
    }
 };

 /** With ES6, you can remove the function keyword
  *  and colon altogether when defining functions in objects.
  *  Here's an example of this syntax: */

 const person2 = {
    name: "Taylor",
    sayHello() { return `Hello! My name is ${this.name}`}
 }

/** Write Concise Object Literal Declarations Using Object Property Shorthand */

/**Problem Explanation:
 * Here, we are tasked at returning an object that accepts
 *  the function’s parameters as its attributes.
 */

 const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
      name,
      age,
      gender
    };
    // change code above this line
  };