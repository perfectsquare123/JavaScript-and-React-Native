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

// Bracket notation  -- required to use if properties name has spaces " "
var friends = ourDog["dog friends"];    // [ 'everything!' ]   // can use " " or ' '
var f = 16;
var FF = ourDog[f];         // Nanth

// Updating Object Properties
ourDog.legs = 5;       // "legs": 5

// Add property to object 
// 2 ways to add
ourDog.bark = "bow-wow";
ourDog["smell"] = 123;

// Delete property 
// use the keyWord 'delete'
delete ourDog.name;
// console.log(ourDog);

// use it as DICTIONARY
// replacing switch statement
// [switch statement]
var result = "";
var val = "beta";

switch(val){
    case "alpha": 
        result = "adams";
        break;
    case "beta" : 
        result = "bettrice";
        break;
    // ... and so on
}
console.log(result);   // bettrice

// now change to =>
// [property: value]
var lookup = {
    "alpha": "adams",
    "beta": "bettrice",
};

console.log(lookup[val]);   // bettrice

// The `hasOwnProperty()` method returns a boolean 
// indicating whether the object has the specified property as its own property (as opposed to inheriting it).
function checkObj(checkProp){
    if(lookup.hasOwnProperty(checkProp)) return lookup[checkProp];
    else return "not found!";
}
console.log(checkObj("alpha"));     // adams
console.log(checkObj("ALPHA"));     // not found!

// manipulating complex object
// var = [ {..object1..}, {..object2..}] -- objects inside array
var myMusic = [
    //object1
    {
        "artist": "YuXin",
        "title": "baby i know",
        "release_year": 2022,
        "formats": ["CD", "8T", "LP"],
        "gold": true
    },
    // object2
    {
        "artist": "XiaoZhan",
        "title": "qingYuNian",
    }
];

// nested object
var myStorage = {
    "car": {
        "inside":{
            "glove box": "maps",
            "plane seats =)": "lab"
        },
        "outside":{
            "metal": "red"
        }
    }
};

var context = myStorage.car.inside["plane seats =)"];
console.log(context);

// nested array
var myPlant = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulips",
            "sunflower",
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
        ]
    }
];

console.log(myPlant[1].list[1]);    // pine

// Record Collection
var collection = {
    "1234": {
        album: "whatever",
        artist: "someone famous",
        tracks: [
            "music1",
            "music2"
        ]
    },
    "5678": {
        album: "friend",
        artist: "someone not famous",
        tracks: [
            "music3",
            "music4"
        ]
    },
}

// keep a copy of the collection for tests
// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.
// When sending data to a web server, the data has to be a string.
// Convert a JavaScript object into a string with JSON.stringify().
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    }
    else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];      // if this exist -- set it to itself; if not exist -- set it into empty array
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }
    return collection;
}

updateRecords(5678, "tracks", "test")       // push in new elements into track array
console.log(updateRecords(1234, "year", "2001"));   // since this property is not exist before that, so it will add into

// while loop
// for loop
// can directly access the length of array by -- arr[i].length => find the length of nested array[i]
// do while loop

var contact = [
    {
        firstName: "Sher",
        lastName: "lock",
        age: 35,
        likes: ["java", "play"],
    },
    {
        firstName: "manys",
        lastName: "popois",
        age: 3,
        likes: ["javaScript", "playing"],
    },
]

function lookupProfile( name, prop){
    for(var i=0; i< contact.length; i++){
        if(contact[i].firstName === name){
            // fance function to check whether this property exist
            return contact[i][prop] || "no such property";
        }
    }
    return "no such contact";
}

console.log(lookupProfile("Sher", "age"));      //35

// generate random number
// Math.random()  -- generate [0,1) ie not include 1
// [decimal]
number = Math.random();
// Math.floor()  -- round down
// [integer] 
randomNumberBetween0and19 = Math.floor(Math.random()*20);       // 0-19
// [Random range]
min = 5; max = 15
randomRange = Math.floor(Math.random() * (max-min+1)) + min;    // 5-15
//console.log(randomRange);

// NaN -- Not a Number
function convertToInteger(str){
    //return parseInt(str);
    return parseInt(str, 2)     // second parameter -- radix 
    // if radix = 2, ie str is in binary form and will be converted into base 10 int
}

console.log(convertToInteger("10010"));

// Ternary Operator
// Format:
// condition ? statement-if-true : statement-if-false
check = (a===b) ? true : false;     // false

// multiple Ternary Operator
// including else-if
var check;
var num;
check = num > 0 ? "positive" : num < 0 ? "negative" : "zero";

// variable declaration [ var, let , const ]

// var vs let
// `let` -- declares limited to a block-scoped local variable, or expression on which it is used, optionally initializing it to a value.
//       -- initialized to a value only when a parser evaluates it
//       -- begins declarations, not statements
//       -- so that it will only appear within the block/scope that we want them to appear
//       -- allow to declare once only, if (let var = certain number) happens twice => error
// `var` -- declares a variable globally, or locally to an entire function regardless of block scope
//       -- no error given while declared twice
//       -- rarely use for declaration

// "use strict";
// -- enable strict mode which catches common coding mistakes and unsafe actions

function checkScope(){
    "use strict";
    //var i = "function scope";
    if(true){
        var i = "block scope";
        console.log("Block scope i is : ", i);
        // let, let -- block; var, var -- block; // , let -- block; // , var -- block
    }
    console.log("Function scope i is : ", i);
    // let, let -- function; var, var -- block; // , let -- ReferenceError: i is not defined; // , var -- block
}
checkScope();

// const
// -- have all the property of `let` but cannot reassign a const
// -- usually give the name UPPER CASE
// *** most of the time use `let` and `const` only, rarely use `var`

// Mutate an array declared with const
const s = [5, 2, 7]
function editInPlace(){
    "use strict";

    // s = [2,5,7]    -- ERROR
    // but the following works
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    return s;
}

console.log(editInPlace());

// prevent object mutation
// `Object.freeze()'
const MATH_CONSTANTS = {
    PI: 3.142
};
Object.freeze(MATH_CONSTANTS);