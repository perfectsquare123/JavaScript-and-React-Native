// YouTube Tutorial
// Learn JavaScript ...

// NOTE: in JavaScript, semicolon " ; " as end line is not required
//       but for good practice and clearer reading, I will just put it througout the coding

var number = 5; // in-line comment

/* multi-line comment
in paragraph woohoo*/

/*Data Types:
undefined, null, boolean, string, symbol, number, object*/

// 3 ways to declare variable
// case sensitive! first letter must be small letter
var myName = "Ci Hui";       // 1. var   => going to be used throughout the whole prog
myName = 8;                  // data type can be changed without declare
let ourName = "Let's go";    // 2. let   => only use within the scope where we declared
const pi = 3.14125;          // 3. const => variable that should never be changed

// see things in console (basically print func)
var a;
console.log(a);             // print out "null"/"undefined"
a = 2;
console.log(a);             // print out "2"

// increment & decrement
var c = 4;
c++;        
c+=1;
c = c + 1;      // they are all the same
c--;    c*=3;   c/=7;  

//  to print out double quote in a string
// use \"    or    use single quote at outide the string
var d = "my name is \"halo\" !";
d = 'my name is "halo" !';
console.log(d);  

// ESCAPE SEQUENCE List:
/* code output
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      formfeed
*/

// string can be concatenate
var b = "I am a ";
b = b + "string!";          // "I am a string!"
b = "This is the start" + "This is the end"     // This is the start This is the end
b += "another!";        // This is the start This is the end another!
var B = "AAAA";
var BB = "i am tryting " + B + " to add something";  // i am trying AAAA to add something

// length of string
var len = BB.length;        // len  = 34

// access char in string
console.log(BB[0]);              // "i" -- first letter
var BBB = BB[BB.length - 1];     // "g" -- last letter
// console.log(BBB);

// string is immutable thru 
// BB[0] = 'H';     error!

// ARRAYS - store several pieces of data in one place
var c = ["Johm", 23];
// Nested arrays
var CC = [["May", 24], ["Peter", 19]];
// array is mutable
CC[0][1] = 100;
console.log(CC);
console.log(CC[0][0]);      // accesing multi-dimensional array

// push()  -- add new item at the BACK
var d = ["Bob", "Alice"];
d.push("Charlie");                // [ 'Bob', 'Alice', 'Charlie' ]
CC.push(["Hedy", 20, 12.5]);      // [ [ 'May', 100 ], [ 'Peter', 19 ], [ 'Hedy', 20, 12.5 ] ]

// pop()  -- remove the LASR item  -- return the element being pop
console.log(CC.pop());            // [ 'Hedy', 20, 12.5 ]
console.log(CC);                 // [ [ 'May', 100 ], [ 'Peter', 19 ] ]

// shift()  -- remove the FIRST item  -- return the element being shift
CC.shift();      // [ [ 'Peter', 19 ] ]

// unshift()  -- add new item at the FRONT  -- return the number of element in the updated array
var tryy = CC.unshift(["Chars"],["Barlie"]);        // tryy = 3, CC = [ [ 'Chars' ], [ 'Barlie' ], [ 'Peter', 19 ] ]

// write useable code using function
// pasing argument (no declaration needed! wowww)
function newFunc(a,b){
    console.log("I am printing...");
    console.log(a + b);
}

newFunc("hello", 8);

// variance declare outside function -- Global Scope, can use at everywhere
// variance declare inside function -- without keyword "var", also Global Scope

/* A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
JSON.stringify();  -- Convert a JavaScript object into a string*/
var d = [1,2,3,4,5];
console.log("The numbers: " + d);       // The numbers: 1,2,3,4,5
console.log("The numbers: " + JSON.stringify(d));   // The numbers: [1,2,3,4,5]

// if else statememts
// compaarator
// 3 == '3'     -- return true -- it will do type conversion before comparing ie. convert both side into int
// 3 === '3'    -- returnn false -- === strict equal, no type conversion

// switch
var e;
switch(e){
    case 1:
        // do something
        break;

    case 2:
    case 3:
        // do something
        break;
    
    default:
        // do something
        break;
}

// Build JavaScript Objects
// -- use properties to access data instead of indexes
// properties: values    -- can be in any datatype
var ourDog = {
    "name": "Camper",   // string
    "legs": 4,          // int
    "dog friends": ["everything!"],      // array
    16: "Nanth"
};

// dot notation
var nameValue = ourDog.name;    // Camper

// Bracket notation  -- required to use if properties name has spaces
var friends = ourDog["dog friends"];    // [ 'everything!' ]   // can use " " or ' '
var f = 16;
var FF = ourDog[f];         // Nanth

// Updating Object Properties
ourDog.legs = 5;       // "legs": 5

