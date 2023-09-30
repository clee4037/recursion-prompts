/* jshint esversion: 6 */

/* REDO: 4, 11, 15 */


// Solve the following prompts using recursion.

  // Declare result num

  /* BASE CASE */

  /* RECURSIVE CASE */


  // Return result

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function(n) {
  // Declare results num
  var result = n;

  /* BASE CASE */
  if (n < 0) {
    return null;
  } else if (n <= 1) {
    return 1;
  }
  /* RECURSIVE CASE */
  return result *= factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(array) {
  // Declare result num
  var result = 0;
  /* BASE CASE */
  if (!Array.isArray(array)) {
    return array;
  }

  /* RECURSIVE CASE */
  array.forEach(function(num) {
    result += sum(num);
  });

  // Return result
  return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function(array) {
  // Declare result num
  var result = 0;
  /* BASE CASE */
  if (!Array.isArray(array)) {
    return array;
  }
  /* RECURSIVE CASE */
  array.forEach(function(element) {
    result += arraySum(element);
  });

  // Return result
  return result;
};


// 4. Check if a number is even.
// isEven(2) // true
// isEven(9) // false
let isEven = function(n) {
  if(n < 0) {
    n = Math.abs(n);
  }
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n-2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function(n) {
  // Declare result num
  var result = 0;
  var isNeg = false;
  if (n < 0) {
    isNeg = true;
    n = -n;
  }
  /* BASE CASE */
  if (n === 0) {
    return 0;
  } else {
    result = n-1 + sumBelow(n-1);
  }
  /* RECURSIVE CASE */
  if(isNeg) {
    return -result;
  } else {
    return result;
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function(x, y) {
  // Declare result array
  var results = [];
  // Handle edge case x === y and y-x or x-y is 1
  if (Math.abs(y - x) <= 1) {
    return results
  }

  /* HANDLE ASC */
  if (x < y) {
    /* BASE CASE */
    if (x+1 === y-1) {
      return x+1;
    }
    /* RECURSIVE CASE */
    return results.concat(x+1, range(x+1,y));
  /* HANDLE DESC */
  } else {
    /* BASE CASE */
    if (x-1 === y-1) {
      return x-1;
    }
    /* RECURSIVE CASE */
    return results.concat(x-1, range(x-1,y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function(base, exp) {
  // I: base and exponent (nums)
  // O: base ^ exponent (num)
  // C: recursion
  // E:
  //   exp = 0 -> result = 1
  //   base = 0 -> results = 0
  //   negative base -> should be handled by solution
  //   negative exponents -> 1 /(base ^ exp)

  // Declare result num
  var result = 1;
  // Handle negative case
  var negExp = exp < 0 ? true : false;
  exp = exp < 0 ? -exp : exp;

  /* EDGE CASE: 0 */
  if (base === 0) {
    return 0;
  }
  if (exp === 0) {
    return 1;
  }
  /* BASE CASE */
  if(exp === 1) {
    return base;
  }
  /* RECURSIVE CASE */
  result = base * exponent(base, exp - 1);

  // Return result and handle neg exponent
  return result = negExp ? (1 / result) : result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function(n) {
  // I: number
  // O: bool
  // C: recursion
  // E:
  //   0 -> false
  //   negative int -> false
  //   fractions -> 1/(x^2)

  /* EDGE CASE */
  if(n <= 0) {
    return false;
  }
  // Handle fractions
  n = 0 < n < 1 ? (1 / n) : n;
  /* BASE CASE */
  if (n === 1) {
    return true;
  }
  /* RECURSIVE CASE */
  return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
// reverse("hello"); // olleh
let reverse = function(string) {
  // I: string
  // O: reverse of string
  // C: recursion
  // E: empty, string length 1

  // Declare result string
  var result = '';
  // handle edge case
  if (string.length === 0) {
    return result;
  }
  /* BASE CASE */
  var currentIndex = string.length-1;
  if(currentIndex === 0) {
    return string[currentIndex];
  }
  /* RECURSIVE CASE */
  return result = string[currentIndex] + reverse(string.slice(0, -1)); // end index for .slice() is not inclusive
};

// 10. Write a function that determines if a string is a palindrome.
// palindrome("koko") // false
// palindrome("rotor") // true
// palindrome("wow") // true
let palindrome = function(string) {
  // I: string
  // O: bool
  // C: recursion
  // E: capitalized letters, empty, string length 1

  // Even chars: string[i] === string[string.length -1 -i]
    // abba -> string[1] === string[4 - 1 - 1]
  // Odd chars: string[i] === string[string.length -1 -i]
    // aba -> string[1] === string[2 - 1]
  var lowercaseString = string.toLowerCase();

  var leftIndex = 0
  var rightIndex = string.length - 1;
  // Base Case
    // rightIndex - leftIndex <= 1
  if (rightIndex - leftIndex <= 1) {
    return lowercaseString[leftIndex] === lowercaseString[rightIndex];
  }
  // Recursive
    // return if both current pair and next pair true
  return (lowercaseString[leftIndex] === lowercaseString[rightIndex] && palindrome(string.slice(1,-1)));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
  // I: nums
  // O: num - remainder of x/y
  // C: recursion, can't use modulo
  // E:
    // y < x -> return x

  // CASE 1: x is neg, y is pos
    // add y till x between 0 and y
  // CASE 4: x is pos, y is pos
    // subact y till x between 0 and y

  // CASE 2: x is pos, y is neg
    // add y till x between y and 0
  // CASE 3: x and y are neg
    // subtract y till x between y and 0

  /* Solution 1 */
  // var modulo = function(x, y) {
  //   if(y === 0) {
  //     return NaN;
  //   }
  //   if (y > 0) {
  //     if(-y < x && x < y) {
  //       return x;
  //     }
  //     if(x > 0) {
  //       return modulo(x-y,y);
  //     }
  //     if(x < 0) {
  //       return modulo(x+y,y);
  //     }
  //   }
  //   if (y < 0) {
  //     if (y < x && x < -y) {
  //       return x;
  //     }
  //     if(x < 0) {
  //       return modulo(x-y,y);
  //     }
  //     if(x > 0) {
  //         return modulo(x+y,y);
  //     }
  //   }
  // };

  /* Solution 2 */
  var modulo = function(x, y) {
    if(y === 0) {
      return NaN;
    }
    if ((y > 0 && -y < x && x < y) || (y < 0 && y < x && x < -y)) {
      return x;
    }
    if ((y > 0 && x > 0) || (y < 0 && x < 0)) {
      return modulo(x-y,y);
    }
    if ((y > 0 && x < 0) || (y < 0 && x > 0)) {
      return modulo(x+y,y);
    }
  };


// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
  // I: 2 nums
  // O: 1 num (product)
  // C: recursion, no * operator, no Math methods
  // E:
    // x or y is 0
    // x or y is neg

  // Basic strat: add x to x, y times

let multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  var result = 0;
  if(x < 0 && y < 0) {
    x = -x;
    y = -y;
  }
  if(x > 0 && y < 0) {
    x = -x;
    y = -y;
  }
  if (y === 1) {
    return x;
  }
  return x + multiply(x, y-1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// I: 2 nums
// O: quotient (num)
// C: recursion, no / operator or Math methods
// E:
  // x is 0 -> ; y is 0 -> undefined
  // negatives
    // x = -16, y is 3 -> -5
      // Base case: x between -y, 0
    // x = 15, y = -3 -> -5
      // Base case: x between 0, -y
    // x and y are neg -> turn both pos

  // recursive case:
    // 1 + (divide(x-y, y))

let divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }

  if(x < 0 && y < 0) {
    x = -x;
    y = -y;
  }

  if(x < 0 && y > 0) {
    if(-y < x && x < 0) {
      return 0;
    }
    return 1 + divide(x + y, y);
  } else if (x > 0 && y < 0) {
    if (0 < x && x < -y) {
      return 0;
    }
    return 1 + divide(x + y, y);
  } else if(x > 0 && y > 0) {
    if (0 < x && x < y) {
      return 0;
    }
    return 1 + divide(x - y, y)
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

// check if larger num is dividiable by small

let gcd = function(x, y) {
  // EDGE CASE
  if(x < 0 || y < 0) {
    return null;
  }
  if(x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }
  if (y === x) {
    return y;
  }

  // Recursive
  if (y > x) {
    var temp = y;
    y = x;
    x = temp;
  }

  return gcd(y, x%y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true

// I: 2 strings
// O: bool
// C: recursion
// E: empty string(s)
let compareStr = function(str1, str2) {
  /* BASE CASE */
  if (str1.length === 0 && str2.length === 0) {
    return str1[0] === str2[0];
  }

  /* RECURSIVE CASE */
  return (str1[0] === str2[0]) && compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// I: string
// O: array -> each letter is an index of array
// C: use recursion,
// E: spaces -> ''
  // empty array = [];
let createArray = function(str) {
  // Declare result num
  var result = [];
  /* BASE CASE */
  if (str.length === 1) {
    return result.concat(str[0]);
  }
  /* RECURSIVE CASE */
  return result.concat(str[0], createArray(str.slice(1)));
};

// 17. Reverse the order of an array
// I: Array
// O: array
// C: recursion
// E: empty array
let reverseArr = function(array) {
  // Declare result num
  var result = [];
  /* BASE CASE */
  if(array.length === 1) {
    return result.concat(array[0]);
  }
  /* RECURSIVE CASE */
  return result.concat(array[array.length-1], reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
// I: 2 nums
// O: array
// C: recursion
// E: length = 0, value {}, []
//
let buildList = function(value, length) {
  // Declare result num
  var result = [];
  if (length === 0) {
    return result;
  }
  if (length === 1) {
    return [value];
  }
  return result.concat([buildList(value, length-1)]);


};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function(n) {
  // Declare result num

  /* BASE CASE */

  /* RECURSIVE CASE */


  // Return result
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function(array, value) {
  // Declare result num

  /* BASE CASE */

  /* RECURSIVE CASE */


  // Return result
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function(array, callback) {
  // Declare result num

  /* BASE CASE */

  /* RECURSIVE CASE */


  // Return result
};

// 22. Write a function that counts the number of times a key occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let countKeysInObj = function(obj, key) {
  // Declare result num

  /* BASE CASE */

  /* RECURSIVE CASE */


  // Return result
};

// 23. Write a function that counts the number of times a value occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
let replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
let fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
let tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// let obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// let obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function(input) {
};
