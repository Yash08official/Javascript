//1st ::-> Able to access variable before even declaring called as HOSTING CONCEPT

var a; // I ony declare it not give the value
console.log("Value is :", a); // I want to print the value of the variable
// Output : Undefined

//2nd ::->  Able to access variable before even declaring

console.log("Value is :", b); // Access variable first
var b; // declaring it later
//Output : Undefined

console.log("Value is :", c); // value is undefined
var c = 10;
console.log("Value is :", c); // Value will be 10
// Output : undefined
// Output : 10

function greetings() {
  console.log("Hello");
} // Declared a function

greetings(); // I call it after declaring it

// Output : Hello

named(); // I call it

function named() {
  console.log("World");
} // Declared a function later after calling it
// Output : World
