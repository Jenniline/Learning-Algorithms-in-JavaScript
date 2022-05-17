

/**
 * using recursion to countdown from n to 1 the solutions are given in the functions 
 * countdown1 and countdown2
 * @param {*} n 
 * @returns 
 */
function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }

function countdown2(n){
    return n < 1 ? [] : [n, ...countdown(n - 1)];
 }

/** Using Recursion to create a Range Of Numbers 
 * 
 *  define a function named rangeOfNumbers with two parameters. 
 * The function should return an array of integers which begins 
 * with a number represented by the startNum parameter and ends 
 * with a number represented by the endNum parameter. 
 * The starting number will always be less than or equal to the ending number. 
 * Your function must use recursion by calling itself and not use loops of any kind. 
 * It should also work for cases where both startNum and endNum are the same.
 * 
 * */ 

 function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum === 0){
    return [startNum];
  }else{
    let numbers = rangeOfNumbers(statNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }

};