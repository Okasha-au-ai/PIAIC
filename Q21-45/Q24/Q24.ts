// Tests for equality and inequality with strings
console.log("Is 'apple' equal to 'apple'? I predict true.");
console.log('apple' == 'apple');  // True

console.log("Is 'apple' not equal to 'banana'? I predict true.");
console.log('apple' != 'banana');  // True

console.log("Is 'apple' equal to 'Apple'? I predict false.");
console.log('apple' == 'Apple');  // False

console.log("Is 'apple' not equal to 'apple'? I predict false.");
console.log('apple' != 'apple');  // False

// Tests using the lowercase function
console.log("Is 'HELLO' in lowercase equal to 'hello'? I predict true.");
console.log('HELLO'.toLowerCase() == 'hello');  // True

console.log("Is 'WORLD' in lowercase not equal to 'world'? I predict false.");
console.log('WORLD'.toLowerCase() != 'world');  // False

// Numerical tests
console.log("Is 5 greater than 3? I predict true.");
console.log(5 > 3);  // True

console.log("Is 10 less than or equal to 7? I predict false.");
console.log(10 <= 7);  // False

console.log("Is 7 equal to '7'? I predict false.");
console.log(7 == '7');  // False

// Tests using "and" and "or" operators
console.log("Is 10 greater than 5 and 7 less than 10? I predict true.");
console.log(10 > 5 && 7 < 10);  // True

console.log("Is 5 less than 3 or 7 equal to 10? I predict false.");
console.log(5 < 3 || 7 == 10);  // False

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple'));  // True

console.log("Is 'grape' not in the fruits array? I predict true.");
console.log(!fruits.includes('grape'));  // True

console.log("Is 'orange' in the fruits array? I predict true.");
console.log(fruits.includes('orange'));  // True

console.log("Is 'mango' not in the fruits array? I predict true.");
console.log(!fruits.includes('mango'));  // True
