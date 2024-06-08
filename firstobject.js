// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const bar = "Bar1";
const cafe = "Frutify";
const restaurant = "Biryanis&More";

const favouritePlaces = {
    bar:bar,
    cafe:cafe,
    restaurant:restaurant,
    greeting() {
        console.log("Hello there!");
    }
}

console.log(favouritePlaces);

favouritePlaces.greeting();

console.log(favouritePlaces.cafe)




//output
{
  bar: 'Bar1',
  cafe: 'Frutify',
  restaurant: 'Biryanis&More',
  greeting: [Function: greeting]
}
Hello there!
Frutify
