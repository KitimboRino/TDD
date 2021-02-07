/*
Kitimbo Rino & Liz Kamugisha.
-------------------------------------------FACTORIAL--------------------------------------------
Factorial of a number calculted by multiplying all whole numbers from our given number down to 1.
Factorials are indicated by a "!" sign and they are whole numbers.

Whole Numbers are positive integers and 0. For example; 0, 1, 2, 3, and so on
*/

// Function to test factorial of a number
const factorial = (num) => {
  //  Unit 1
  if (num === 0) {
    return 1;
  }

  // Unit 2
  return num * factorial(num - 1);
};

// Last unit
console.log(factorial(3));

//  Exporting factorial function.
module.exports = factorial;
