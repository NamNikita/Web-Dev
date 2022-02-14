// 1. Hello world

alert('Hello, World!');

// this is how comments work

/* an example of two
lines comment
*/

// 2. Code structures

// For example, here we split “Hello World” into two alerts:
alert('Hello'); alert('World');

// Usually, statements are written on separate lines to make the code more readable:
alert('Hello');
alert('World');

// 3. Use strict

// "use strict";

// this code works the modern way

// 4. Variables

let message;
message = 'Hello';

alert(message); // Output Hello

let user = 'John';
let age = 25;
let messageUser = 'Hello';

alert(user); alert(age); alert(messageUser);

// 5. Data types

let n = 123;
n = 12.345;

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let age = null;

let age;

alert(age); // shows "undefined"