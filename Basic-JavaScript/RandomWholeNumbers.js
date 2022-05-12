
/**
 * QUESTION
 * Create a function called randomRange that takes a range myMin and myMax and returns a 
 * random whole number that's greater than or equal to myMin, and is less than or equal 
 * to myMax, inclusive.
 * 
 * @param {*} myMin 
 * @param {*} myMax 
 * @returns 
 */

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  /**
   * Code Explanation
   * 
   * Math.random() generates our random number between 0 and ≈ 0.9
   * 
   * Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1) 
   * because of the grouping operator ( ).
   * 
   * The result of that multiplication is followed by adding myMin and then “rounded” 
   * to the largest integer less than or equal to it (eg: 9.9 would result in 9)
   * 
   * 
   * 
   */