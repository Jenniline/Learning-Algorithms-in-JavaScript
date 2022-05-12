/**
 *  How the Ternary Operator works
 * a ? b : c
 * a is the condition
 * b is the code that runs if the condition (a) returns true 
 * c is the code that runs if the condition (a) returns false
 * 
 * 
 */

/** 
 * Example 
 * 
 */
function findGreater(a , b) {
    if (a > b) {
        return "a is greater"
    } else {
        return "b is greater or equal "        
    }
}

/**
 * Transforming findGreater to use the Ternary Operator
 */

function findGreater(a,b) {
    return   a > b ? "a is greater" : "b is greater or equal";
}

/**
 * Use the conditional operator in the checkEqual function to check if
 *  two numbers are equal or not. The function should return either the 
 * string Equal or the string Not Equal.
 * 
 */

function checkEqual(a,b) {
    return a === b ? "Equal" : "Not Equal";
}