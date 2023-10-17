/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
//
const SMALL_PIZZA_PRICE = 16.99;
const LARGE_PIZZA_PRICE = 19.99;
const SMALL_PIZZA_DIAM = 13;
const LARGE_PIZZA_DIAM = 17;

const smallPizzaArea = Math.PI*((SMALL_PIZZA_DIAM/2)**2);
const largePizzaArea = Math.PI*((LARGE_PIZZA_DIAM/2)**2);

console.log(smallPizzaArea);
console.log(largePizzaArea);

// 2. What is the cost per square inch of each pizza?
const smallPizzaCostPerInchSquare = SMALL_PIZZA_PRICE/smallPizzaArea;
const largePizzaCostPerInchSquare = LARGE_PIZZA_PRICE/largePizzaArea;

onsole.log(smallPizzaCostPerInchSquare);
console.log(largePizzaCostPerInchSquare);
// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
const LOWEST_CARD = 1;
const HIGHEST_CARD = 13;

// 4. Draw 3 cards and use Math to determine the highest
// card
const card1 = Math.ceil(Math.random()*HIGHEST_CARD);
const card2 = Math.ceil(Math.random()*HIGHEST_CARD);
const card3 = Math.ceil(Math.random()*HIGHEST_CARD);

const highestCard = Math.max(card1, card2, card3);

console.log(card1);
console.log(card2);
console.log(card3);
console.log('The highest card is:', highestCard);


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
let firstName = 'Vasile';
let lastName = 'Visovan';
let streetAddress = '7740 SE 36th St';
let cityAddress = 'Mercer Island';
let stateAddress = 'WA';
let zipAddress = '98040';

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
const FULL_NAME_AND_ADDRESS = `${firstName} ${lastName} \n${streetAddress} \n${cityAddress} ${stateAddress} ${zipAddress}`
console.log(FULL_NAME_AND_ADDRESS);
let extractFirstNameIntoVariable = FULL_NAME_AND_ADDRESS.split(' ').slice(0,1).join(' ');
console.log('This is my first name:', extractFirstNameIntoVariable);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 3, 1);

let midPoint = new Date((startDate.getTime()+endDate.getTime())/2);
console.log(midPoint);
