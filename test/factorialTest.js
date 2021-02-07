/* eslint-disable no-undef */

/* --------------------- Test last ---------------------- */
// Requiring Chai
const chai = require('chai');

const { assert } = chai;

const factorial = require('../factorial');

describe('factorial', () => {
  //  Last check for Factorial function.
  it('Check if 3! returns 6 ', () => {
    const result = factorial(3);
    assert.equal(result, 6, 'Test is corect');
  });

  /* Exceptions */
  //  Checking if the ! of the number is a boolean
  it('Check number is not boolean', () => {
    const isNumber = 'true';
    const isNotNUmber = 'false';

    assert.isNotBoolean(isNumber, 'This is a number');
    assert.isNotBoolean(isNotNUmber, 'Not a number');
  });
});
