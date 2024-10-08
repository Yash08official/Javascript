<h1> Hosting And Strings in JavaScript </h1>

<h3>Execution context in JavaScript </h3>

Execution context : Everything in JavaScript is executed in an environment which is called as Execution context

Lets understand this,
If you write any piece of code and execution context is created for that piece of code and it runs in two phases first is "Memory Allocation" and "Code Execution" phase

You see a piece of code ::->
var X =10;  
function sum(a,b) {
return a + b;
}

const result = sum(2, 5);

console.log("Result :", result);

What happens ::->

<h4> Memory Allocation </h4>

Memory is allocated to all the variables and functions present here
Firstly memory is allocated . If we start allocating the memory we have first a variable "X" with a value of 10
So it will not intialize the value to this variable , It will just create a memory for this variable "X" So a variable X is put in a memory . The space will be allocated for this varaible X and the value for this will be undefined

Then you have a function Sum and all the details of this function will be putted in this memory so basically a memory will be allocated for this function . Next will be the variable result so again a memory will be allocated for this variable and then you will see undefined Bascially value is not intailized for this memory allocation phase , only the memory is allocated and next is the execution statement

So , in the memory allocation phase,for the piece of code memory allocated not the value is allocated

<h4> Code Execution </h4>

When we start executing this codeit execute line by line, So first top line will be executed

It says , Var X = 10 that means now it will execute this statement X=10
so in the memeory the memory is provided the value of X is undefined Bascially space was provided in the memory for value of X and the value of undefined and now undefined will br removed and the value of 10 will come Then we have this function return that is already present in the memory then we have Var result is equals to SUM 2 and 3 basically

Now we are calling this function SUM with values 2 and 3 Since I am calling this function with value of 2 and 3 and then it will return 2 + 3 which is equivalant to five

When we are calling this function inside this execution context another execution context will be created . This will be the local execution context for some function and there are two phases one will be memory allocation phase and another will be the code exection phase and then you are saying SUM that means you are calling this function with this values 2 and 3 and it will be returning 2 + 3 is 5 So this whole code will be executed

If you see in this function , we dont have any variable so atleast no memory is required
Only execution will happen a + b equals 5 and then it will moved inside this result

So , In the result we will get the value 5 and the undefined will be replaced with 5 and last it will execute console.log result and then the result will be printd

IMP : WHEN FUNCTION IS CALLED THE ANOTHER EXECUTION CONTEXT GET CREATED (Memory Allocation and Code Execution)

THIS IS HOW EXECUTION CONTEXT GET CREATED

THIS IS A GLOBAL EXECUTION CONTEXT

When this execution gets created , we also have a "Call Stack"

In the Call stack there is a GLOBAL EXECUTION CONTEXT now whenever a function called a local execution execution context gets created for that function

as soon as get gets executed it gets removed from stack or will be popped out and similary there are more functions comming here one by one and then they will be executed and they will be removed from the stack and at last global execution context gets executed completely

"THIS IS HOW JAVASCRIPT EXECUTE AND JAVASCRIPT WORKS" any code you run in JS memory allocation is done and the code execution is done

<h3>Variable Hosting in Javascript </h3>
 
Variable Hosting ::->
      Every code inside JavaScript runs in an execution context

If I say , I have a variable

var a ; // I ony declare it not give the value
console.log(a) // I want to print the value of the variable

So what will be the output

As we earlier, our code is go to the execution context in it firslty the memory will be allocated variable A and the value of undefined will be assigned to it

when code execution starts , It eecute line one bt one it will see Var a ; nothing to execute memory is already allocated and then console.log (a); It will check in the memory the values is "Undefined" and it will print the value ::-> UNDEFINED

Able to access variable before even declaring
console.log("Value is :",b); // Access variable first
var b; // declaring it later

Now , at this time
Before declaring I am trying to access this variable  
Output is ::-> Inside JS you can do it.(Using VAR)
Memory allocated to the variable Var A and code execution happens in phase 2 that means when line starts executing this varible already has a memory and it has value of undefined so it will no throw error in that case

Now lets say you assign any value to the variable and then you have to print the variable value of this variable then output will be

console.log("Value is :", c);
var c = 10;
console.log("Value is :", c);

<h3>Function Hosting in Javascript </h3>

Lets see what is function hosting
Now, we understand the meaning of function hosting : "Hosting" we are able to access the variable or functions before even declaring it

Similarily, lets try with functions

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

// REMEMBER :
//Normal function declaration
named();
function named() {
console.log("World");
}

//Function expression
named();
var named = () => {
console.log("World");
};

In Function expression, you are assigning a complete function to a variable (Wgen you assign a function to a variable)

Now , How the HOSTING works in different cases :

In Normal function declaration, we understand this is a function which has been giventhe entire memory whenever I calling it even before declaring it its fine
But
In Function expression, When this is in a variable that means this will be treated as a variable . So here variable hosting will work
So,in memory allocation phase,"named" is assigned to the memory allocation phase, named will be givened value will be undefined

In Function expression, You can call it after declaring it

<h2> Strings in JavaScript </h2>

Strings : Strings are something which are enclosed in a double codes and single codes
Basically a group of characters which is present inside / enclosed double codes
let says

let firstName = "Yash Wasankar";

"Yash Wasankar" ::-> It is a string beacause it is enclosed in a double codes and this string can contain characters and it can also contain digits and also contain sopecial characters
If I say console.log(typeOf(firstName));
it gives output as String

and also if i write

let secondName = 'Prashant Wasankar'; // This is also a string
console.log(typeof(secondName));

it gives output as String

also

let sentence = "My name is Yash Wasankar";
console.log((sentence));
console.log(sentence.length);

let words = 'It\'s alright';
console.log(words);
console.log(words.length);

let newName = ("Name = Yash Wasankar");
console.log(newName);
console.log(typeof(newName)); // String

Strings as an Object

let fullName = new String ("Name : Yash Wasankar");
console.log(fullName);
console.log(typeof(fullName)); // object

console.log(newName == fullName); // true
console.log(newName === fullName); // false : type is object

<h2> String Method in JavaScript </h2>

Strings are Immutable ::-> Original string are not changed

<ul>
<li>_stringName.length </li>
<li>_stringName.replace() </li>
<li>_stringName.replaceAll() </li>
<li>_stringName.split() </li>
<li>_stringName.trim() </li>
<li>_stringName.trimStart() </li>
<li>_stringName.trimEnd()</li>
<li>_stringName.concat() </li>
<br>
<li>_stringName.charAt()</li>
<li>_stringName.charCodeAt()</li>
<li>_stringName.at() </li>
<li>_stringName.slice() </li>
<li>_stringName.SubString() </li>
<li>_stringName.substr() </li>
<br>
<li>_stringName.reverse() </li>
<li>_stringName.join()</li>
</ul>

Suppose you want to extract some characters out of the string like

charAt comment :-

<!-- let oneString = "Hello Jhon Wick !!!";
// character at the position , You have to specify the position from 0 to last
console.log(oneString.charAt(0));
//output : H -->

let text = "Yash Wasankar CS Enginer CS CS CS ";

console.log("Length of the string is :", text.length); // text.length

text.replace("CS", "Computer");
console.log("text.length is :", text); // output : Yash Wasankar CS Enginer

//for changing you have to collect it in variable

const replaceString = text.replace("CS", "Computer");
console.log("text.replace is :", replaceString);

const replaceAll = text.replaceAll("CS", "Computer");
console.log("text.replaceAll is :", replaceAll);

//split method
const splitString = text.split(" ");
console.log("text.split is :", splitString);

let randomText = "Yash, Wasankar, CS, Engineer";
const replaceStringSplit = randomText.split(",");
console.log("randomText.split is :", replaceStringSplit);

// repeat method
console.log("text.repeat is :", text.repeat(2));

// trim method
const trimText = " Yash Wasankar ";
console.log(trimText.length);

const trim = trimText.trim();
console.log("trimText.trim is :", trimText.trim());

// trimStart
const trimText1 = trimText.trimStart();
console.log("trimText.trimStart is :", trimText1.trimStart());
console.log(trimText1.length);

// trimEnd
const trimText2 = trimText.trimEnd();
console.log("trimText.trimEnd is :", trimText2.trimEnd());
console.log(trimText2.length);

// concat

let firstName = "Yash ";
let lastName = "Wasankar";
const fullName = firstName.concat(lastName);
console.log("firstName.concat(lastName) is :", fullName);

// charAt : check the position of the character

let oneString = "Hello Jhon Wick !!!";
// character at the position , You have to specify the position from 0 to last
console.log("oneString.charAt is :", oneString.charAt(0));
//output : H

// charCodeAt : Character encoding . It shows the code of the character
//ASCII codes = A -Z starts from 65
let oneString2 = "I am Jhon Wick !!!";
console.log("oneString2.charCodeAt is :", oneString2.charCodeAt(6));

//
console.log("oneString2 is :", oneString2[0]);

//
oneString2[2] = "H"; // Strings are immutable . not change any character of string
console.log("oneString2 result is :", oneString2);

// If you want to extract a character from a string for that we have method called 'SLICE'

// Slice : Taking a sub string from a string

let textSlice = "adcdefghijklmnopqr";
console.log("textSlice.slice(2) is :", textSlice.slice(2)); // starting c which index is 3
console.log("textSlice.slice(4, 8) is :", textSlice.slice(4, 8)); // starting from index 4 to 7

//It will also start character from back like index -1, -2,-3,...

// SubString : It is same as Slice but it dont take negative indexing if you give negative indexing then it will consider it as zero

console.log("textSlice.substring(4, 8) is :", textSlice.substring(4, 8));
console.log("textSlice.substring(2) is :", textSlice.substring(2));

//substr : In case of subStr we have second parameter as the length so when you say

console.log(textSlice.substr(0,4));// "0" index and "4" characters (length of the string)

// toLowercase
const toLowercaseString = "ABCDEFGHIJKLmnopqrstuvwxyz";
console.log("toLowercaseString is :", toLowercaseString.toLowerCase());

//toUpperCase
const toUpperCaseString = "ABCDEFGHIJKLmnopqrstuvwxyz";
console.log("toUpperCaseString is :", toUpperCaseString.toUpperCase());


  // Reverse the array of characters
  let reversedArray = charArray.reverse();
  
  // Join the array back into a string
  let reversedString = reversedArray.join();

  //End